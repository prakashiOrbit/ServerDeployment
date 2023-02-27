package com.dml.application.Ui.Activity;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ProgressBar;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.dml.application.App.ResponsebodyClass;
import com.dml.application.Models.LoginModel;
import com.dml.application.R;
import com.dml.application.Retrofit.RetrofitClient;
import com.dml.application.Retrofit.ServiceApi;
import com.github.ybq.android.spinkit.SpinKitView;
import com.google.android.material.textfield.TextInputEditText;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;

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
                    checkUserExist();
                    return;

                }

                new Handler().postDelayed(new Runnable() {
                    @Override
                    public void run() {
                        checkUserExist();
                    }
                }, 00);
            }


        });


    }


    private boolean validatePhonenumber() {
        String val = userPhoneNumber.getText().toString().trim();
        String checkPhonenumber = "^(?=*[0-9])";
        if (val.isEmpty()) {
            userPhoneNumber.setError("Field cannot be empty");
            return false;
        } else if (val.length() != 10) {
            userPhoneNumber.setError("Number must be 10 Digits");
        } else {
            userPhoneNumber.setError(null);

            return true;
        }
        return false;
    }


    private void checkUserExist() {

            String sessionId = "7be9be23-f7bb-4fd3-add4-cfa9c018b0d8";

            ResponsebodyClass.FlowAdmin requestBody = new ResponsebodyClass.FlowAdmin("lookup","ProfileFlow");
            ResponsebodyClass responsebodyClass= new ResponsebodyClass("9657972894","custom",requestBody);



            spin_kit.setVisibility(View.GONE);

            phone_number = userPhoneNumber.getText().toString();
            RetrofitClient retrofit = new RetrofitClient();
            Retrofit retrofitClient = retrofit.getRetrofitInstance(LoginActivity.this);
            if (retrofitClient == null) {
                return;
            }


        Call<LoginModel> call = retrofitClient.create(ServiceApi.class).LoginToken(sessionId, responsebodyClass);
            call.enqueue(new Callback<LoginModel>() {
                @Override
                public void onResponse(Call<LoginModel> call, Response<LoginModel> response) {
                    if (!response.isSuccessful()) {
                        Toast.makeText(LoginActivity.this, "success", Toast.LENGTH_SHORT).show();
                        startActivity(new Intent(getApplicationContext(), OTPActivity.class));
                        finish();
                    }
                }

                @Override
                public void onFailure(Call<LoginModel> call, Throwable t) {
                    Log.e("Error", t.getMessage());
                    Toast.makeText(LoginActivity.this, "something went wrong please try again!!", Toast.LENGTH_SHORT).show();
                }
            });


        }


    }
