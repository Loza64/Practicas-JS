package com.loza.application.Activities.exercices

import android.content.Context
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.TextView
import androidx.cardview.widget.CardView
import androidx.core.content.ContextCompat
import com.google.android.material.slider.RangeSlider
import com.loza.application.R
import java.text.DecimalFormat

class ImcCalculatorActivity : AppCompatActivity() {

    private var maleSelected = true
    private var femaleSelected = false

    private lateinit var cardMale:CardView
    private lateinit var cardFemale:CardView
    private lateinit var tvHeight:TextView
    private lateinit var rsHeight:RangeSlider

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_imc_calculator)
        initUI()

    }

    private fun initComponents(){
        cardMale = findViewById(R.id.cardMale)
        cardFemale = findViewById(R.id.cardFemale)
        tvHeight = findViewById(R.id.tvHeight)
        rsHeight = findViewById(R.id.rsHeight)
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
            val df = DecimalFormat("#.##")
            var result = df.format(value)
            tvHeight.text = "$result cm"
        }
    }

    private fun initUI(){
        initComponents()
        setColor()
        initListeners()
    }

}