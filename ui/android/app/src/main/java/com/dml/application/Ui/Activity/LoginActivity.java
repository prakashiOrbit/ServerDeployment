package com.dml.application.Ui.Activity;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ProgressBar;
import android.widget.Toast;

import com.dml.application.App.ResponsebodyClass;
import com.dml.application.Models.LoginModel;
import com.dml.application.R;
import com.dml.application.Retrofit.RetrofitClient;
import com.dml.application.Retrofit.ServiceApi;
import com.dml.application.Ui.Fragment.HomeFragment;
import com.github.ybq.android.spinkit.SpinKitView;
import com.google.android.material.textfield.TextInputEditText;

import okhttp3.RequestBody;
import okhttp3.ResponseBody;
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

        String sessionId = "dca4ca8b-ce3a-4755-90f0-951bd77c1b07";
        ResponsebodyClass requestBody = new ResponsebodyClass();
        requestBody.setFlowAdmin(new ResponsebodyClass.FlowAdmin("lookup", "ProfileFlow"));
        requestBody.setPhoneNumber("9657972894");
        requestBody.setType("custom");


        spin_kit.setVisibility(View.GONE);

        phone_number = userPhoneNumber.getText().toString();
        RetrofitClient retrofit = new RetrofitClient();
        Retrofit retrofitClient = retrofit.getRetrofitInstance(LoginActivity.this);
        if (retrofitClient == null) {
            return;
        }

        Call<LoginModel> call = retrofitClient.create(ServiceApi.class).LoginToken(sessionId, requestBody);
        call.enqueue(new Callback<LoginModel>() {
            @Override
            public void onResponse(Call<LoginModel> call, Response<LoginModel> response) {
                if (!response.isSuccessful()) {
                    Toast.makeText(LoginActivity.this, "success", Toast.LENGTH_SHORT).show();
                    startActivity(new Intent(getApplicationContext(), HomeFragment.class));
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