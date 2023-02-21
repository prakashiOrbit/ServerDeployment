package com.iorbit.login;


import org.apache.commons.lang.RandomStringUtils;

public class Profile implements java.io.Serializable
{
    private String userId;
    private String phoneNumber;
    private String oneTimePassword;
    private long generatedTime;

    public Profile(String ui, String pn)
    {                            
    	
    	userId = ui;
    	phoneNumber = pn;
        generateOTP();
    }

    public void generateOTP()
    {
        oneTimePassword = RandomStringUtils.randomNumeric(5);
        generatedTime = System.currentTimeMillis();
        new MessageResponse("OTP is generated" +oneTimePassword);
    }

    public String getUserId() { return userId; }
    public String getPhoneNumber() { return phoneNumber; }
  
    public boolean verifyOneTimePassword(String otp)
    
        throws Exception
    {
        if ((oneTimePassword == null) || (oneTimePassword.length() <= 0))
            throw new Exception("Already verified. Please reset.");

        long time = System.currentTimeMillis();
        //boolean ret = ((time - generatedTime) < (24 * 60 * 60 * 1000));  //valid for 1 day
        boolean ret = ((oneTimePassword !=  null) && (otp != null) && (oneTimePassword.equals(otp)));
        if (!ret)
            throw new Exception("Invalid OTP.");
        return ret;
    }

    public void resetOTP() { oneTimePassword = ""; }
}


