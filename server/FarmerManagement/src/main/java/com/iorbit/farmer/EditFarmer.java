package com.iorbit.farmer;

public class EditFarmer implements java.io.Serializable {
	private String farmerId;
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
	private String centerId;
	private String centerName;

	public EditFarmer(Farmer farmer) {
		name = farmer.getName();
		phoneNo = farmer.getPhoneNo();
		streetAddress = farmer.getStreetAddress();
		city = farmer.getCity();
		state = farmer.getState();
		pinCode = farmer.getPinCode();
		aadharNo = farmer.getAadharNo();
		panNo = farmer.getPanNo();
		payeeName = farmer.getPayeeName();
		accountNo = farmer.getAccountNo();
		ifscCode = farmer.getIfscCode();
		centerId = farmer.getCenterId();
		centerName = farmer.geteCenterName();
	}

	public String getfarmerId() { return farmerId; }
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
	public String getCenterId() { return centerId; }
	public String geteCenterName() { return centerName; }
}
