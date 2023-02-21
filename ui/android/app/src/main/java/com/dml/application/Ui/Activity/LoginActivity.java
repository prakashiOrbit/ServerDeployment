package com.dml.application.Ui.Activity;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.view.View;
import android.widget.Button;
import android.widget.ProgressBar;

import com.dml.application.R;
import com.github.ybq.android.spinkit.SpinKitView;
import com.google.android.material.textfield.TextInputEditText;

public class LoginActivity extends AppCompatActivity {

    Button LOGIN;
    String phone_number;
    TextInputEditText userPhoneNumber;

    SpinKitView spin_kit;



    private ProgressBar progressBar;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        LOGIN = findViewById(R.id.log);
        userPhoneNumber = findViewById(R.id.phonenumber_);
        spin_kit = findViewById(R.id.spin_kit);//progressBar =findViewById(R.id.progress_bar);


        LOGIN.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                spin_kit.setVisibility(View.VISIBLE);
                String phonenumber = userPhoneNumber.getText().toString().trim();
                if (!validatePhonenumber()) {

                    spin_kit.setVisibility(View.GONE);
                    return;

                }

                new Handler().postDelayed(new Runnable() {
                    @Override
                    public void run() {
                        checkUserExist();
                    }
                }, 3000);
            }


        });




    }


    private boolean validatePhonenumber() {
        String val = userPhoneNumber.getText().toString().trim();
        String checkPhonenumber = "^(?=*[0-9])";
        if(val.isEmpty()){
            userPhoneNumber.setError("Field cannot be empty");
            return false;
        } else if(val.length()!=10){
            userPhoneNumber.setError("Number must be 10 Digits");
        }
        else {
            userPhoneNumber.setError(null);

            return true;
        }
        return false;
    }



    private void checkUserExist() {


//        LOGIN.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View v) {
spin_kit.setVisibility(View.GONE);
                Intent intent = new Intent(getApplicationContext(), OTPActivity.class);
                intent.putExtra("key","1");
                startActivity(intent);

            }
//        });

}