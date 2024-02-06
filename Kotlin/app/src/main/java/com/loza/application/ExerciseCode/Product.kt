package com.loza.application.ExerciseCode

class Product private constructor(val name:String, val stock:Int, val price:Double){

    companion object{
        fun getProduct(name:String, stock:Int, price:Double): Product {
            return Product(name, stock, price)
        }

        fun getDetails():String{
            return "This is a product"
        }
    }
}


fun main(){
    //Devido a que es un contructor privado, la instancia no puede ser Product().funcion
    val product = Product.getProduct("Play", 34, 756.34)
    println(Product.getDetails())
    println("name: ${product.name}")
    println("stock: ${product.stock}")
    println("price: ${product.price}")
}