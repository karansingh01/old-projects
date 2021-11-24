plugins {
    kotlin("js") version "1.5.20"
}

group = "me.jpedersen"
version = "1.0"

repositories {
    jcenter()
    mavenCentral()
}

dependencies {
    testImplementation(kotlin("test"))
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.5.1")
    implementation("org.jetbrains.kotlinx:kotlinx-nodejs:0.0.7")
    implementation(npm("puppeteer-core", "8.0.*"))
    implementation(npm("chrome-aws-lambda", "8.0.*"))
}

kotlin {
    js(IR) {
        useCommonJs()
        binaries.executable()
        nodejs()
    }
}