package com.loza.application.ExerciseCode

import com.loza.application.ExerciseCode.SmartTv

fun main(){
    val device = SmartTv()
    device.name = "LG XDW325"

    println("Device: ${device.name}")
    device.turnOn()
    device.turnOff()
}