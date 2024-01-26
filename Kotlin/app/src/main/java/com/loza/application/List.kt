package com.loza.application

fun main(){

    println("--------------------------------Original MutableList")
    var listMutable:MutableList<String> = mutableListOf("Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo")
    println(listMutable.joinToString())

    println("--------------------------------Add new element with any index using .add")
    listMutable.add(0,"holaaaaaa with add, (index:0, element: holaaaaaaaaaaaa)")
    listMutable.plus("holaaaaaaaa using plus")
    println(listMutable.joinToString())

    println("--------------------------------Remove item from list")
    listMutable = listMutable.filter { it != "Lunes" }.toMutableList()
    println(listMutable.joinToString())

    println("--------------------------------Alter list")
    listMutable.forEachIndexed { index, element ->
        listMutable[index] = if (element == "Lunes") "peppa" else element
    }

    println(listMutable.joinToString())

    println("--------------------------------Original NormalList")

    var normalList:List<String> = listOf("Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo")
    println(normalList.joinToString())

    println("-----------------Add new element")
    normalList.plus("New element using plus")
    println(normalList.joinToString())

    println("-----------------Remove element using filter (Remove Lunes)")
    normalList = normalList.filter { it !== "Lunes" }
    println(normalList.joinToString ())

    println("-----------------Alter element Martes to Peppa")
    val index = 1
    normalList = normalList.toMutableList().apply {
        this[index] = "Peppa"
    }
    println(normalList.joinToString())

    println("\n Me gusta más MutableList que List")
}