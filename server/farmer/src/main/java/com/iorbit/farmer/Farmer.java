package com.iorbit.farmer;

import java.util.Calendar;
import java.util.UUID;

public class Farmer implements java.io.Serializable {
	
	private static int idCounter = 1;
	private UUID fId;
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
	private String SearchableValue;

	public Farmer(UUID fId,String farmerId, String name, String phoneNo, String streetAddress, String city, String state,String pinCode, String aadharNo, String panNo, String payeeName, String accountNo, String ifscCode,String centerId,String centerName) {
		this.fId=UUID.randomUUID();
		this.farmerId=generateId();
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
		setCenterId(centerId);
		setCenterName(centerName);
	}

	public Farmer(String Searchable) {

	}
	
	private static String generateId() {
        // Generate ID using the current year and increment the counter
        int year = Calendar.getInstance().get(Calendar.YEAR);
        long timeInMillis = System.currentTimeMillis();
        return "F2R-" + year + "-" + timeInMillis;
    }
	public UUID getFId() { return fId; }
	public String getFarmerId() { return farmerId; }
	public void setFarmerId(String farmerId) { this.farmerId = farmerId; }
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
	public String getCenterId() { return centerId; }
	public void setCenterId(String centerId) { this.centerId = centerId; }
	public String geteCenterName() { return centerName; }
	public void setCenterName(String centerName) { this.centerName = centerName; }
	
	
	public void setSearchValues() {
		SearchableValue = farmerId + "|" + name + "|" + phoneNo + "|" + streetAddress + "|" + city + "|" + state + "|"
				+ pinCode + "|" + aadharNo + "|" + panNo + "|" + payeeName + "|" + accountNo + "|" + ifscCode +"|" + centerId +"|" + centerName;
	}
}