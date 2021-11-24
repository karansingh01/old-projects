package externals

fun <T> implement(a: T.() -> Unit) = (js("{}") as T).apply(a)