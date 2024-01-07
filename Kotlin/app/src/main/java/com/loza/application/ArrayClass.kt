package com.loza.application

fun main(){
    val item1 = SmartTv()
    item1.name = "LG HTGQ2E3R"

    val item2 = SmartTv()
    item2.name = "SAMSUNG VFEWFFF"

    //val array:List<SmartTv> = listOf(item1, item2)
    val array:Array<SmartTv> = arrayOf(item1, item2)
    for (element in array){
        println(element.name)
    }
}