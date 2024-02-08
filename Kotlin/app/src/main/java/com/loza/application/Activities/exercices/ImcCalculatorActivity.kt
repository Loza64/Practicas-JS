package com.loza.application.Activities.exercices

import android.content.Context
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import androidx.cardview.widget.CardView
import androidx.core.content.ContextCompat
import com.loza.application.R

class ImcCalculatorActivity : AppCompatActivity() {

    private var maleSelected = true
    private var femaleSelected = false

    private lateinit var cardMale:CardView
    private lateinit var cardFemale:CardView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_imc_calculator)
        initComponents()
    }

    private fun initComponents(){
        cardMale = findViewById<CardView>(R.id.cardMale)
        cardFemale = findViewById<CardView>(R.id.cardFemale)
    }

    private fun initListeners(){
        cardMale.setOnClickListener{
            maleSelected = true
            femaleSelected = false
        }
        cardFemale.setOnClickListener{
            maleSelected = false
            femaleSelected = true
        }
        setColor();
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

}