package com.loza.application.Activities

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.View
import android.widget.EditText
import androidx.appcompat.widget.AppCompatButton
import androidx.appcompat.widget.AppCompatEditText
import com.loza.application.R

class ThirdActivity : AppCompatActivity(), View.OnClickListener {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_third)

        //Click Listeners
        findViewById<AppCompatButton>(R.id.btnStart).setOnClickListener(this)
    }

    override fun onClick(p0: View?) {
        when(p0?.id){
            R.id.btnStart -> {
                val txtInfo = findViewById<AppCompatEditText>(R.id.txtInfo)
                if(txtInfo.text.toString().isEmpty()){
                    Log.i("Application", "Button pressed")
                }else{
                    Log.i("Application", "Button with info: ${txtInfo?.text.toString()}")
                }
            }
        }
    }
}