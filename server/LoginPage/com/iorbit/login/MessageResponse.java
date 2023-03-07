package com.iorbit.login;


public class MessageResponse implements java.io.Serializable
{
    private String message;

    public MessageResponse(String msg)
    {
        message = msg;
    }
}