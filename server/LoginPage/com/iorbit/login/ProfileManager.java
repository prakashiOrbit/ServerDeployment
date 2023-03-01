package com.iorbit.login;


	import java.util.List;

import org.apache.commons.lang.RandomStringUtils;



	public class ProfileManager
	{
	    private String oneTimePassword;


		public ProfileManager()
	    {
	    }

	    public void createLogin(CreateProfile login, Profile exist)
	        throws Exception
	    {
	        if (exist != null)
	        {
	        	 oneTimePassword = RandomStringUtils.randomNumeric(4);
	            
	             new MessageResponse("" + oneTimePassword);
	            return;
	        }

	        Profile l = new Profile(login.getPhoneNumber());
	        new MessageResponse("Created Login: " + login.getPhoneNumber());
	    }

	    public void verifyLogin(VerifyProfile vl, Profile login)
	        throws Exception
	    {
	    	login.verifyOneTimePassword(vl.getOTP());
	    	login.resetOTP();
	    	vl.setRole();
	        new MessageResponse("Verified. Please Login.");
	    }

	   
	    public void addUser(VerifyProfile v, Profile p)
	            throws Exception
	        {
	            List profile = v.getPhoneNumber();
	            if ((profile == null) || (profile.size() <= 0))
	                throw new Exception("No profile found with given phone and OTP.");

	            for (int i = 0; i < profile.size(); i++)
	            {
	                Profile s = (Profile)profile.get(i);
	                s.resetOTP();
	               
	            }

	            new MessageResponse("Added user.");
	        }
	    

	}



