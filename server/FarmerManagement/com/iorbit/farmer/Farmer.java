package com.iorbit.farmer;

public class Farmer implements java.io.Serializable {

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
	private String SearchableValue;

	public Farmer(String fId, String name, String phoneNo, String streetAddress, String city, String state,String pinCode, String aadharNo, String panNo, String payeeName, String accountNo, String ifscCode) {
		setFId(fId);
		setName(name);
		
		setPhoneNo(phoneNo);
		setStreetAddress(streetAddress);
		setCity(city);
		setState(state);
		setPinCode(pinCode);
		setAadharNo(aadharNo);
		setPanNo(panNo);
		setPayeeName(payeeName);
		setAccountNo(accountNo);
		setIfscCode(ifscCode);
	}

	public Farmer(String Searchable) {

	}

	public String getFId() { return fId; }
	public void setFId(String fId) { this.fId = fId; }
	public String getName() { return name; }
	public void setName(String name) { this.name = name; }
	public String getPhoneNo() { return phoneNo; }
	public void setPhoneNo(String phoneNo) { this.phoneNo = phoneNo; }
	public String getStreetAddress() { return streetAddress; }
	public void setStreetAddress(String streetAddress) { this.streetAddress = streetAddress; }
	public String getCity() { return city; }
	public void setCity(String city) { this.city = city; }
	public String getState() { return state; }
	public void setState(String state) { this.state = state; }
	public String getPinCode() { return pinCode; }
	public void setPinCode(String pinCode) { this.pinCode = pinCode; }
	public String getAadharNo() { return aadharNo; }
	public void setAadharNo(String aadharNo) { this.aadharNo = aadharNo; }
	public String getPayeeName() { return payeeName; }
	public void setPanNo(String panNo) { this.panNo = panNo; }
	public String getPanNo() { return panNo; }
	public void setPayeeName(String payeeName) { this.payeeName = payeeName; }
	public String getAccountNo() { return accountNo; }
	public void setAccountNo(String accountNo) { this.accountNo = accountNo; }
	public String getIfscCode() { return ifscCode; }
	public void setIfscCode(String ifscCode) { this.ifscCode = ifscCode; }
	
	
	public void setSearchValues() {
		SearchableValue = fId + "|" + name + "|" + phoneNo + "|" + streetAddress + "|" + city + "|" + state + "|"
				+ pinCode + "|" + aadharNo + "|" + panNo + "|" + payeeName + "|" + accountNo + "|" + ifscCode;
	}
}