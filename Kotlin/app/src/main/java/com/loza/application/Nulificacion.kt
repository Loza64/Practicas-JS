package com.loza.application

fun main(){
    var dato:String? = null //Chekea si la variable es una string nuleable
    //println(dato!!.get(0)) //Estamos seguros que no va a tener null
    println(dato?.get(0) ?: "Valor nullo") //Si el dato no es null devuelve el valor si no devuelve null
}