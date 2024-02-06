package com.loza.application.ExerciseCode

fun main(){
    println("For normal")
    for (i in 1..5) {
        println(i)
    }

    println("For until")
    for (i in 1 until 6) {
        println(i)
    }

    println("While")
    var i = 1
    while (i <= 5) {
        println(i)
        i++
    }

    println("Do While")
    var j = 1
    do {
        println(j)
        j++
    } while (j <= 5)

}