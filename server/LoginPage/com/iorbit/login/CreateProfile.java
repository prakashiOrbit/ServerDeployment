package com.iorbit.login;


	public class CreateProfile implements java.io.Serializable
	{
	  
	    private String phoneNumber;
	    private String oneTimePassword;
	   
	    public CreateProfile()
	    {
	    	
	    }

	  
	    public String getPhoneNumber() { return phoneNumber; }
	    public String getOTP() { return oneTimePassword; }
	    
	}