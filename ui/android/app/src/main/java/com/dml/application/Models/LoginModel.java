package com.dml.application.Models;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

import java.util.ArrayList;


public class LoginModel {
    public String event;
    public ArrayList<Response> responses;


    public class Response {
        public String message;
        public String ___smart_responseid___;
    }

}



