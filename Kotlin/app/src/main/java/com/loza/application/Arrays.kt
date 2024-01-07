package com.loza.application

fun main() {
    val arrayNumbers = arrayOf(1, 2, 3, 4, 5, 6, 7, 8) //Variable without modification

    println("Forma uno: for in")
    for (element in arrayNumbers) {
        println(element)
    }

    println("Forma dos: forEachIndexed")
    arrayNumbers.forEachIndexed { index, element ->
        println("Index: $index, element: $element")
    }

    println("Forma 3: forEach")
    arrayNumbers.forEach {
        println(it)
    }
}