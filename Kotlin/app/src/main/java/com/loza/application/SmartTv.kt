package com.loza.application

class SmartTv {
    var name:String = ""
        set(value) {
            value.also { field = it }
        }

    fun turnOn() {
        println("Smart device is turned on.")
    }

    fun turnOff(){
        println("Smart device is turned off.")
    }
}