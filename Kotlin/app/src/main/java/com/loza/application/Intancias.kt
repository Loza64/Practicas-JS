package com.loza.application

fun main(){
    val device = SmartTv()
    device.name = "LG XDW325"

    println("Device: ${device.name}")
    device.turnOn()
    device.turnOff()
}