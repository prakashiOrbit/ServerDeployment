package com.iorbit.login;


	import java.util.List;
import java.util.Map;
import java.util.ArrayList;
import java.util.HashMap;

	public class VerifyProfile implements java.io.Serializable
	{
		private String userId;
		private String phoneNumber;
	    private String oneTimePassword;
	    private String password;

	    private List<String> role;
	    private String identityType;
	    
	    
	    private List userid;
	    private Map<String, Object> search;

	    public VerifyProfile()
	    {
	    }
        
	    public String getOTP() { return oneTimePassword; }
	    public List getUserId() { return userid; }
	    public String getPhoneNumber() { return phoneNumber; }
	   
	    public void setRole() 
	    { 
	        role = new ArrayList<String>();
	        role.add("profile"); 
	        identityType = "custom";
	        search = new HashMap<String, Object>();
	        search.put("Phone", phoneNumber);
	        search.put("oneTimePassword", oneTimePassword);
	        userid = new ArrayList();
	    }
	}
