package com.loza.application.ExerciseCode

fun main(){
    val milesToKilometers:(Double) -> Double = {miles -> miles * 1.60934}
    //(Double) la entrada del parametro
    // -> Double el tipo de dato que retorna la funcion en este caso Double
    // {} Proceso de la funcion
    val miles = 5.0
    val kilometers = String.format("%.2f", milesToKilometers(miles))
    println("$miles millas es equivalente a $kilometers kilometros")
}