package externals

import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.channels.ProducerScope
import kotlinx.coroutines.channels.awaitClose
import kotlinx.coroutines.flow.callbackFlow
import kotlin.js.Json
import kotlin.js.Promise

@JsModule("chrome-aws-lambda")
@JsNonModule
external object ChromeAwsLambda {
    val executablePath: Promise<String?>
    val puppeteer: PuppeteerNode
    val args: Array<String>
}

external interface PuppeteerNode {
    fun launch(launchOptions: LaunchOptions = definedExternally): Promise<Browser>
}

external interface LaunchOptions {
    var headless: Boolean
    var devTools: Boolean
    var args: Array<String>
    var executablePath: String
    var ignoreHTTPSErrors: Boolean
    var defaultViewport: ViewPort?
}

external interface ViewPort {
    var width: Number
    var height: Number
}

external interface Browser {
    fun newPage(): Promise<Page>
    fun close(): Promise<Unit>
    fun pages(): Promise<Array<Page>>
}

external interface Page {
    fun close(): Promise<Unit>
    fun goto(url: String, options: GotoOptions = definedExternally): Promise<Any>
    fun waitForTimeout(timeout: Number): Promise<Unit>
    fun waitForSelector(selector: String, options: WaitForSelectorOptions = definedExternally): Promise<ElementHandle>
    fun waitForFunction(pageFunction: String, options: FrameWaitForFunctionOptions = definedExternally): Promise<Any>
    fun setRequestInterception(boolean: Boolean): Promise<Unit>

    @JsName("$")
    fun querySelector(selector: String): Promise<ElementHandle?>

    @JsName("$$")
    fun querySelectorAll(selector: String): Promise<Array<ElementHandle>>

    fun <T> on(event: String, handler: (T) -> Unit)
    fun <T> off(event: String, listener: (T) -> Unit)

    fun evaluate(pageFunction: dynamic, handle: ElementHandle): Promise<String?>
    fun setUserAgent(userAgent: String): Promise<Unit>
    fun content(): Promise<String>
    fun frames(): Array<Frame>
    fun waitForNavigation(): Promise<Unit>;

    fun select(selector: String, value: String): Promise<Array<String>>
    fun type(selector: String, value: String): Promise<Unit>
    fun reload(options: WaitForOptions = definedExternally): Promise<Unit>
}

external interface Frame {
    @JsName("$$")
    fun querySelectorAll(selector: String): Promise<Array<ElementHandle>>
    fun url(): String
}

external interface WaitForOptions {
    var timeout: Number?
    var waitUntil: String?
}

external interface WaitForSelectorOptions {
    var visible: Boolean
    var hidden: Boolean
    var timeout: Number?
}

external interface FrameWaitForFunctionOptions {
    var polling: Any
    var timeout: Number?
}

external interface GotoOptions {
    var referer: String
    var timeout: Number
    var waitUntil: String
}


external interface HttpRequest {
    @JsName("_requestId")
    val requestId: String

    fun resourceType(): String
    fun abort(errorCode: String = definedExternally): Promise<Unit>

    @JsName("continue")
    fun continueRequest(): Promise<Unit>
    fun url(): String
    fun headers(): Json
}

external interface HttpResponse {
    fun request(): HttpRequest
    fun status(): Number
    fun text(): Promise<String>
    fun headers(): Json
}

external interface ElementHandle {
    fun click(): Promise<Unit>

    @JsName("$$")
    fun querySelectorAll(selector: String): Promise<Array<ElementHandle>>
}

external interface Element {
    fun getAttribute(qualifiedName: String): String?
}

@OptIn(ExperimentalCoroutinesApi::class)
fun <T, R> Page.onFlow(event: String, block: ProducerScope<R>.(T) -> Unit) = callbackFlow {
    val listener = fun(data: T) { this.block(data) }
    on(event, listener)
    awaitClose {
        try {
            off(event, listener)
            println("Listener removed.")
        } catch (e: Exception) {
            println("Could not remove listener: ${e.stackTraceToString()}")
        }
    }
}