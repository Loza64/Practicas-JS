package com.loza.application

fun main(){

    println("--------------------------------Original list")
    var lists:MutableList<String> = mutableListOf("Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo")
    println(lists.joinToString())

    println("--------------------------------Add new element with any index")
    lists.add(0,"holaaaaaa")
    println(lists.joinToString())

    println("--------------------------------Remove item from list")
    lists = lists.filter { it != "Lunes" }.toMutableList()
    println(lists.joinToString())

    println("--------------------------------Alter list")
    lists.forEachIndexed { index, element ->
        lists[index] = if (element == "Lunes") "peppa" else element
    }

    println(lists.joinToString())
}