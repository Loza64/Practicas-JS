package com.loza.application.Activities.exercices

import android.content.Context
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.TextView
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.widget.AppCompatButton
import androidx.cardview.widget.CardView
import androidx.core.content.ContextCompat
import com.google.android.material.floatingactionbutton.FloatingActionButton
import com.google.android.material.slider.RangeSlider
import com.loza.application.R
import java.text.DecimalFormat
import kotlin.math.pow

class ImcCalculatorActivity : AppCompatActivity() {

    private var maleSelected = true
    private var femaleSelected = false
    private var height = 120
    private var weight = 60
    private var age = 24
    private var imc = 0.0

    private lateinit var cardMale:CardView
    private lateinit var cardFemale:CardView

    private lateinit var tvHeight:TextView
    private lateinit var rsHeight:RangeSlider

    private lateinit var tvWeight:TextView
    private lateinit var tvAge:TextView
    private lateinit var btnWeightMin:FloatingActionButton
    private lateinit var btnWeightPlus:FloatingActionButton
    private lateinit var btnAgeMin:FloatingActionButton
    private lateinit var btnAgePlus:FloatingActionButton

    private lateinit var btnCalculateImc:AppCompatButton

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_imc_calculator)
        initUI()
    }

    private fun showAlertDialog(message:String) {
        val builder = AlertDialog.Builder(this)

        builder.setTitle("Calculadora Imc")
        builder.setMessage(message)

        // Código a ejecutar cuando se hace clic en el botón "Aceptar"
        builder.setPositiveButton("Accept") { dialog, which ->
            dialog.dismiss() // Cerrar el cuadro de diálogo
        }

        val dialog = builder.create()
        dialog.show()
    }

    private fun initComponents(){
        cardMale = findViewById(R.id.cardMale)
        cardFemale = findViewById(R.id.cardFemale)

        tvHeight = findViewById(R.id.tvHeight)
        rsHeight = findViewById(R.id.rsHeight)

        tvWeight = findViewById(R.id.tvWeight)
        tvAge = findViewById(R.id.tvAge)
        btnWeightMin = findViewById(R.id.btnWeightMin)
        btnWeightPlus = findViewById(R.id.btnWeightPlus)
        btnAgeMin = findViewById(R.id.btnAgeMin)
        btnAgePlus = findViewById(R.id.btnAgePlus)

        btnCalculateImc = findViewById(R.id.btnCalculateImc)
    }

    private fun getBackGround(isSelected:Boolean): Int{
        val colorBackground = if(isSelected){
            R.color.background_component_selected
        }else{
            R.color.background_component
        }
        return ContextCompat.getColor(this, colorBackground)
    }

    private fun setColor(){
        cardMale.setCardBackgroundColor(getBackGround(maleSelected))
        cardFemale.setCardBackgroundColor(getBackGround(femaleSelected))
    }

    private fun initListeners(){
        cardMale.setOnClickListener{
            maleSelected = true
            femaleSelected = false
            setColor();
        }

        cardFemale.setOnClickListener{
            maleSelected = false
            femaleSelected = true
            setColor();
        }

        rsHeight.addOnChangeListener { _, value, _ ->
            height = value.toInt()
            tvHeight.text = "$height cm"
        }

        btnWeightMin.setOnClickListener{
            if(weight <= 18){
                weight = 18
            }else{
                weight -=1
            }
            tvWeight.text = weight.toString()
        }

        btnWeightPlus.setOnClickListener{
            weight +=1
            tvWeight.text = weight.toString()
        }

        btnAgeMin.setOnClickListener {
            if(age <= 18){
                age = 18
            }else{
                age -=1
            }
            tvAge.text = age.toString()
        }

        btnAgePlus.setOnClickListener {
            age +=1
            tvAge.text = age.toString()
        }

        btnCalculateImc.setOnClickListener {
            imc = weight / (height/100).toDouble().pow(2)// Peso/(Altura en metros al cuadrado)
            if(imc < 18.5){
                showAlertDialog("Su peso es bajo")
            }
            if(imc > 18.5 && imc <= 24.9 ){
                showAlertDialog("Su peso es normal")
            }
            if(imc > 25 && imc <= 29.9){
                showAlertDialog("Usted sufre de sobre peso")
            }
            if(imc > 30){
                showAlertDialog("Usted sufre de obesidad")
            }
        }
    }

    private fun initUI(){
        initComponents()
        setColor()
        initListeners()
    }

}