package com.loza.application.Activities

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.appcompat.widget.AppCompatTextView
import com.loza.application.R

class FourthActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_fourth)

        val txtExample = findViewById<AppCompatTextView>(R.id.txtExample)

        val intentValue = intent.extras?.getString("ValueExample")

        txtExample.text = intentValue
    }
}