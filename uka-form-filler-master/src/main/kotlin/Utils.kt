import kotlin.time.ExperimentalTime
import kotlin.time.measureTime

@OptIn(ExperimentalTime::class)
suspend fun <T> logTime(name: String, block: suspend () -> T): T {
    var res: T
    val time = measureTime {
        res = block()
    }
    println("Time elapsed $name: $time")
    return res
}