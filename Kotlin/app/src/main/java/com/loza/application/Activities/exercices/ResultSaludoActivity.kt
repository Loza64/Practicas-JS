package com.loza.application.Activities.exercices

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import androidx.appcompat.widget.AppCompatButton
import androidx.appcompat.widget.AppCompatTextView
import com.loza.application.Activities.MenuActivity
import com.loza.application.R

class ResultSaludoActivity : AppCompatActivity(), View.OnClickListener  {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_result_saludo)

        findViewById<AppCompatButton>(R.id.btnReturn).setOnClickListener(this)
        val txtExample = findViewById<AppCompatTextView>(R.id.txtExample)
        val intentValue = intent.extras?.getString("ValueExample").toString()
        txtExample.text = intentValue
    }

    override fun onClick(p0: View?) {
        when(p0?.id){
            R.id.btnReturn ->{
                val intent = Intent(this, MenuActivity::class.java)
                startActivity(intent)
            }
        }
    }
}