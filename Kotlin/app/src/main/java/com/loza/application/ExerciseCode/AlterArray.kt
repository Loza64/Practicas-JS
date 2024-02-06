package com.loza.application.ExerciseCode

fun main(){
    var arrayNumbers = arrayOf(1, 2, 3, 4, 5, 6, 7, 8) //variable with modification

    println("---------------------------------update element----------------------------------")
    println("array before modify: ${arrayNumbers.joinToString()}")
    arrayNumbers.forEachIndexed { index, element ->
        arrayNumbers[index] = if (element == 4) 12322 else element
    }
    println("array after modify: ${arrayNumbers.joinToString()}")

    println("---------------------------------remove element: number 3----------------------------------")
    arrayNumbers = arrayOf(1, 2, 3, 4, 5, 6, 7, 8)
    println("array before deleted: ${arrayNumbers.joinToString()}")

    println("1) using filter")
    arrayNumbers = arrayNumbers.filter { it != 3 }.toTypedArray()
    println("Result: ${arrayNumbers.joinToString()}")

    arrayNumbers = arrayOf(1, 2, 3, 4, 5, 6, 7, 8)
    println("2) using  slice Array")
    arrayNumbers = arrayNumbers.sliceArray(0 until 2) + arrayNumbers.sliceArray(3 until arrayNumbers.size)
    println("Result: ${arrayNumbers.joinToString()}")

    arrayNumbers = arrayOf(1, 2, 3, 4, 5, 6, 7, 8)
    println("3) using filter not")
    arrayNumbers = arrayNumbers.filterNot { it == 3 }.toTypedArray()
    println("Result: ${arrayNumbers.joinToString()}")

    arrayNumbers = arrayOf(1, 2, 3, 4, 5, 6, 7, 8)
    println("3) Create new array")
    arrayNumbers = Array(arrayNumbers.size - 1) { i -> if (i < 2) arrayNumbers[i] else arrayNumbers[i + 1] }
    println("Result: ${arrayNumbers.joinToString()}")
}