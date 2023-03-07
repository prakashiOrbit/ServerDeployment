package com.iorbit.masterdata;

import java.io.Serializable;

public class Truck implements Serializable {

	private String licenseNo;
	private String registrationDate;
	private String VinNo;
	private String chassisNo;
	private String regAddress;
	private String searchableValue;

	public Truck(final String licenseNo, final String registrationDate, final String vinNo, final String chassisNo,
			final String regAddress) {

		this.licenseNo = licenseNo;
		this.registrationDate = registrationDate;
		this.VinNo = vinNo;
		this.chassisNo = chassisNo;
		this.regAddress = regAddress;
	}

	public String getLicenseNo() {
		return licenseNo;
	}

	public String getRegistrationDate() {
		return registrationDate;
	}

	public void setRegistrationDate(final String registrationDate) {
		this.registrationDate = registrationDate;
	}

	public String getVinNo() {
		return VinNo;
	}

	public void setVinNo(final String vinNo) {
		VinNo = vinNo;
	}

	public String getChassisNo() {
		return chassisNo;
	}

	public void setChassisNo(final String chassisNo) {
		this.chassisNo = chassisNo;
	}

	public String getRegAddress() {
		return regAddress;
	}

	public void setRegAddress(final String regAddress) {
		this.regAddress = regAddress;
	}

	public void setSearchValues() {
		this.searchableValue = String.valueOf(this.licenseNo) + "|" + this.VinNo + "|" + this.regAddress;
	}

}
