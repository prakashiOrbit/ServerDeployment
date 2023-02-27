package com.iorbit.farmer;

public class CreateFarmer implements java.io.Serializable{
	public CreateFarmer(){
	}

	private String fId;
	private String name;
	private String phoneNo;
	private String streetAddress;
	private String city;
	private String state;
	private String pinCode;
	private String aadharNo;
	private String panNo;
	private String payeeName;
	private String accountNo;
	private String ifscCode;

	public String getfId() { return fId; }
	public String getName() { return name; }
	public String getPhoneNo() { return phoneNo; }
	public String getStreetAddress() { return streetAddress; }
	public String getCity() { return city; }
	public String getState() { return state; }
	public String getPinCode() { return pinCode; }
	public String getAadharNo() { return aadharNo; }
	public String getPanNo() { return panNo; }
	public String getPayeeName() { return payeeName; }
	public String getAccountNo() { return accountNo; }
	public String getIfscCode() { return ifscCode; }
}

