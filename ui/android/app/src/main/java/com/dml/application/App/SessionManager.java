package com.dml.application.App;

import android.content.Context;
import android.content.SharedPreferences;

import java.util.HashMap;

public class SessionManager {

    SharedPreferences sharedPreferences;
    SharedPreferences.Editor editor;

    public static final String KEY_UserID = "KEY_USERID";

    public static final String KEY_UserPhoneNumber = "KEY_PHONENUMBER";

    public static final String KEY_StatusCode = "KEY_STATUSCODE";



    public SessionManager (Context context){
        sharedPreferences = context.getSharedPreferences("APPKEY",0);
        editor = sharedPreferences.edit();
        editor.apply();
    }


    public void setLogin(boolean login){
        editor.putBoolean("KEY_LOGIN",login);
        editor.commit();
    }

    public boolean getLogin(){

        return sharedPreferences.getBoolean("KEY_LOGIN",false);
    }

    public void setUserDetail(String userid, String phoneNumber, String statusCode) {
        editor.putString(KEY_UserID, userid);
        editor.putString(KEY_UserPhoneNumber, phoneNumber);
        editor.putString(KEY_StatusCode, statusCode);
        editor.commit();
    }


    public HashMap<String, String> getuserDetail() {
        HashMap<String, String> user = new HashMap<String, String>();
        user.put(KEY_UserID, sharedPreferences.getString(KEY_UserID, null));
        user.put(KEY_UserPhoneNumber, sharedPreferences.getString(KEY_UserPhoneNumber, null));
        user.put(KEY_StatusCode, sharedPreferences.getString(KEY_StatusCode, null));
        return user;
    }

}



