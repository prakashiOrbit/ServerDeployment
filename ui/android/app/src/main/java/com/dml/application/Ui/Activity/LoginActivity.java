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

import com.dml.application.Models.ResponsebodyClass;
import com.dml.application.R;
import com.dml.application.Retrofit.RetrofitClient;
import com.dml.application.Retrofit.ServiceApi;
import com.github.ybq.android.spinkit.SpinKitView;
import com.google.android.material.textfield.TextInputEditText;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

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
    SessionManager sessionManager;

  String OTP;
    private ProgressBar progressBar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        LOGIN = findViewById(R.id.log);
        userPhoneNumber = findViewById(R.id.phonenumber_);
        spin_kit = findViewById(R.id.spin_kit);//progressBar =findViewById(R.id.progress_bar);
        sessionManager = new SessionManager(getApplicationContext());

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

            String sessionId = "8ca3696b-f4c2-4e6b-a555-ddf9a52bea56";

            ResponsebodyClass.FlowAdmin requestBody = new ResponsebodyClass.FlowAdmin("lookup","ProfileFlow");
            ResponsebodyClass responsebodyClass= new ResponsebodyClass(userPhoneNumber.getText().toString(),"custom",requestBody);

            Log.e("Error", String.valueOf(responsebodyClass));

            spin_kit.setVisibility(View.GONE);

            phone_number = userPhoneNumber.getText().toString();
            RetrofitClient retrofit = new RetrofitClient();
            Retrofit retrofitClient = retrofit.getRetrofitInstance(LoginActivity.this);
            if (retrofitClient == null) {
                return;
            }


        Call<ResponseBody> call = retrofitClient.create(ServiceApi.class).LoginToken(sessionId, responsebodyClass);
            call.enqueue(new Callback<ResponseBody>() {
                @Override
                public void onResponse(Call<ResponseBody> call, Response<ResponseBody> response) {

                    if (!response.isSuccessful()) {
                        Toast.makeText(LoginActivity.this, "something went wrong please try again!!", Toast.LENGTH_SHORT).show();
                    } else {
                        try {

                            extractLoginResponse(response.body().string());
                        } catch (JSONException | IOException e) {
                            e.printStackTrace();

                        }

                    }

                }

                @Override
                public void onFailure(Call<ResponseBody> call, Throwable t) {

                    Toast.makeText(LoginActivity.this, "something went wrong please try again!!", Toast.LENGTH_SHORT).show();
                }
            });


        }

    private void extractLoginResponse(String string) throws JSONException {


        JSONObject object = new JSONObject(string);
        //productList = new ArrayList<String>();
        // Locate the NodeList name
        JSONArray jsonarray = object.getJSONArray("responses");
        for (int i = 0; i < jsonarray.length(); i++) {
            JSONObject jsonobject = jsonarray.getJSONObject(i);
            OTP=jsonobject.getString("message");


         //   Toast.makeText(this, jsonobject.getString("message"), Toast.LENGTH_SHORT).show();


        }
        Intent intent=new Intent(getApplicationContext(),OTPActivity.class);
        intent.putExtra("OTP",OTP);
        startActivity(intent);

    }
}
