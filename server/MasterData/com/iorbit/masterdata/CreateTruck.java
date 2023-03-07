package com.iorbit.masterdata;

import java.io.Serializable;

public class CreateTruck implements Serializable {

	private String licenseNo;
	private String registrationDate;
	private String VinNo;
	private String chassisNo;
	private String regAddress;

	public String getLicenseNo() {
		return licenseNo;
	}

	public String getRegistrationDate() {
		return registrationDate;
	}

	public String getVinNo() {
		return VinNo;
	}

	public String getChassisNo() {
		return chassisNo;
	}

	public String getRegAddress() {
		return regAddress;
	}
}
