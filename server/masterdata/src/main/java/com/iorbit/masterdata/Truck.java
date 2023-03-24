package com.iorbit.masterdata;

import java.io.Serializable;
import java.util.UUID;

public class Truck implements Serializable {
	
	private UUID tId;
	private String licenseNo;
	private String registrationDate;
	private String VinNo;
	private String chassisNo;
	private String regAddress;
	private String searchableValue;

	public Truck(UUID tId, String licenseNo, String registrationDate, String vinNo, String chassisNo, String regAddress) {
		this.tId = UUID.randomUUID();
		this.licenseNo = licenseNo;
		this.registrationDate = registrationDate;
		this.VinNo = vinNo;
		this.chassisNo = chassisNo;
		this.regAddress = regAddress;
	}
	
	

	public UUID gettId() {
		return tId;
	}

	public void settId(UUID tId) {
		this.tId = tId;
	}

	public String getLicenseNo() {
		return licenseNo;
	}

	public String getRegistrationDate() {
		return registrationDate;
	}

	public void setRegistrationDate(String registrationDate) {
		this.registrationDate = registrationDate;
	}

	public String getVinNo() {
		return VinNo;
	}

	public void setVinNo(String vinNo) {
		VinNo = vinNo;
	}

	public String getChassisNo() {
		return chassisNo;
	}

	public void setChassisNo(String chassisNo) {
		this.chassisNo = chassisNo;
	}

	public void setLicenseNo(String licenseNo) {
		this.licenseNo = licenseNo;
	}



	public void setSearchableValue(String searchableValue) {
		this.searchableValue = searchableValue;
	}



	public String getRegAddress() {
		return regAddress;
	}

	public void setRegAddress(String regAddress) {
		this.regAddress = regAddress;
	}

	public void setSearchValues() {
		this.searchableValue = tId + "|" +licenseNo + "|" + registrationDate + "|" + VinNo + "|" + chassisNo + "|" + regAddress;
	}

}
