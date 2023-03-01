package com.iorbit.login;


	import java.util.List;
import java.util.Map;
import java.util.ArrayList;
import java.util.HashMap;

	public class VerifyProfile implements java.io.Serializable
	{
		
		
	    private String oneTimePassword;
	  

	    private List<String> role;
	    private String identityType;
	    
	    
	    private List phoneNumber;
	    private Map<String, Object> search;

	    public VerifyProfile()
	    {
	    }
        
	    public String getOTP() { return oneTimePassword; }
	    public List getPhoneNumber() { return phoneNumber; }
	   
	   
	    public void setRole() 
	    { 
	        role = new ArrayList<String>();
	        role.add("profile"); 
	        identityType = "custom";
	        search = new HashMap<String, Object>();
	        search.put("Phone", phoneNumber);
	        search.put("oneTimePassword", oneTimePassword);
	        phoneNumber = new ArrayList();
	    }
	}
