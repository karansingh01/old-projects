import externals.Browser
import externals.ElementHandle
import externals.Page
import externals.implement
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.await
import kotlinx.coroutines.delay
import kotlinx.coroutines.promise

/*** CHANGE THESE **/
private const val URL = "https://www.uka.no/program/770-arif-til-uka/1012"

// private const val URL = "https://www.uka.no/program/704-hansenfolle-vs-storsalen/880" (1 billett)
// private const val URL = "https://www.uka.no/program/663-drag-show/889" (1 billett)
// private const val URL = "https://www.uka.no/program/736-flammeblasekurs/1005" (1 billett)

// private const val URL = "https://www.uka.no/program/743-hypnoseshow/882" (1 billett)


private const val MEMBER = true
private const val EMAIL = "karans.s.01@hotmail.com"
private const val CARD_NUMBER = "4925600078710630"
private const val NUMBER_OF_TICKETS = "6"
private const val CARD_EXPIRY_MONTH = "05"
private const val CARD_EXPIRY_YEAR = "24"
private const val CARD_CVC2 = "509"
private const val RELOAD_INTERVAL_MS = 300L

/** STATICS **/
private val SELECTOR_TICKET = "select[class*='ticket-counter'][membershipneeded=${if (MEMBER) "True" else "False"}]"
private val BTN_HREF = URL.split("https://www.uka.no").last()
private val EVENT_CODE = URL.split("/").last()

suspend fun reloadUntilBuyElementAppears(page: Page): ElementHandle {
    var i = 0
    while (true) {
        val element = page.waitForSelector("a[href*='$BTN_HREF']", implement {
            timeout = null
        }).await()
        val href = page.evaluate(js("function(e) { return e.getAttribute('href') }"), element).await()?.trim()
        if (href?.contains("billetter") == true) return element
        println("Reloading $i... (href=$href))")
        delay(RELOAD_INTERVAL_MS)
        page.reload(implement {
            timeout = null
            waitUntil = "domcontentloaded"
        }).await()
        i++
    }
}

suspend fun chooseMaxTickets(page: Page) {
    println("Waiting for ticket selector...")
    val ticketSelector = page.waitForSelector(SELECTOR_TICKET).await()
    println("Found ticket selector")
    val options = ticketSelector.querySelectorAll("option").await()
    val optionsWithValue = options.mapNotNull {
        page.evaluate(js("function(e) { return e.value }"), it).await()?.trim()
    }
    println("Values: $optionsWithValue")
    val maxValue = optionsWithValue.maxByOrNull { it.toIntOrNull() ?: -1 } ?: throw Exception("Could not find max value")
    println("maxValue: $maxValue")
    page.select(SELECTOR_TICKET, NUMBER_OF_TICKETS)
}

suspend fun enterInfo(page: Page) {
    page.type("input[name=email]", EMAIL).await()
    page.type("input[name=ccno]", CARD_NUMBER).await()
    page.select("select[name=exp_month]", CARD_EXPIRY_MONTH).await()
    page.select("select[name=exp_year]", CARD_EXPIRY_YEAR).await()
    page.type("input[name=cvc2]", CARD_CVC2).await()
    page.querySelector("input[id=purchase-btn]").await()?.click()
}

suspend fun buy(browser: Browser) {
    println("eventCode: $EVENT_CODE")
    val page = browser.newPage().await()
    page.goto(URL).await()
    val element = reloadUntilBuyElementAppears(page)
    println("Found buy button!")
    element.click()
    page.waitForNavigation().await()
    println("Navigation complete.")
    chooseMaxTickets(page)
    enterInfo(page)
}

fun main() {
    MainScope().promise {
        BrowserUtils.useBrowser { browser ->
            try {
                buy(browser)
            } catch (e: Exception) {
                e.printStackTrace()
            }
        }
    }.catch { it.printStackTrace() }
}
