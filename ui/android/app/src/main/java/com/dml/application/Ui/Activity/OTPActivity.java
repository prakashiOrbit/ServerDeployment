package com.dml.application.Ui.Activity;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Toast;

import com.chaos.view.PinView;
import com.dml.application.R;
import com.dml.application.Ui.Fragment.HomeFragment;
import com.google.android.material.button.MaterialButton;

public class OTPActivity extends AppCompatActivity {
    MaterialButton VeryFy;
    String Otp;
    PinView pinView;
    @SuppressLint("MissingInflatedId")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_otpactivity);
        VeryFy=findViewById(R.id.btn_Verify);
pinView=findViewById(R.id.pin_view);
        Otp = getIntent().getStringExtra("OTP");



        VeryFy.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {

                if (pinView.getText().toString().equals(Otp)){
                    Intent intent = new Intent(getApplicationContext(), MainActivity.class);
                    intent.putExtra("key","1");
                    startActivity(intent);
                    finish();
                }else {
                    Toast.makeText(OTPActivity.this, "invalid OTP", Toast.LENGTH_SHORT).show();
                }




            }
        });
    }



}