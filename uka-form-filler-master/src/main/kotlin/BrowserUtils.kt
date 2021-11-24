import externals.*
import kotlinx.coroutines.await
import kotlin.js.Promise

@JsExport
@kotlin.js.ExperimentalJsExport
private var browserCached: Browser? = null

object BrowserUtils {
    private suspend fun isLocal(): Boolean {
        return ChromeAwsLambda.executablePath.await() == null
    }

    private suspend fun create(
        localDevTools: Boolean,
        localHeadless: Boolean
    ): Browser {
        return logTime("createBrowser") {
            val awsExecutablePath = ChromeAwsLambda.executablePath.await()
            val local = awsExecutablePath == null

            val args = arrayOf(
                "--disable-notifications",
                "--autoplay-policy=no-user-gesture-required",
                *ChromeAwsLambda.args
            )
            ChromeAwsLambda.puppeteer.launch(implement {
                this.args = args
                headless = if (local) localHeadless else true
                devTools = if (local) localDevTools else false
//                executablePath = awsExecutablePath ?: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
                executablePath = awsExecutablePath ?: "/usr/bin/google-chrome"
                ignoreHTTPSErrors = true
                defaultViewport = if (local) implement<ViewPort> {
                    width = 0
                    height = 0
                } else null
            }).await()
        }
    }

    suspend fun <R> useBrowser(block: suspend (browser: Browser) -> R): R {
        val browser = get()
        try {
            return block(browser)
        } finally {
            try {
                if (!isLocal()) {
                    logTime("browserCleanup") { cleanup(browser) }
                    println("Browser cleaned up")
                }
            } catch (e: Exception) {
                println("Error when cleaning up browser: ${e.stackTraceToString()}")
            }
        }
    }

    private suspend fun cleanup(browser: Browser) {
        val pages = browser.pages().await()
        Promise.all(pages.map { it.close() }.toTypedArray())
    }

    private suspend fun get(
        localDevTools: Boolean = true,
        localHeadless: Boolean = false
    ) = browserCached?.also { cleanup(it) }
        ?: create(localDevTools, localHeadless).also { browserCached = it }

    suspend fun close() {
        browserCached?.close().also { browserCached = null }?.await()
    }

    suspend fun disableImages(page: Page) {
        page.setRequestInterception(true).await()
        page.on<HttpRequest>("request") {
            if (it.resourceType() == "image") it.abort()
            else it.continueRequest()
        }
    }
}
