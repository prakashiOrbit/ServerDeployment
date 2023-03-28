package com.iorbit.masterdata;

import java.io.Serializable;
import java.util.UUID;

public class CreateTruck implements Serializable {
	private UUID tId;
	private String licenseNo;
	private String registrationDate;
	private String VinNo;
	private String chassisNo;
	private String regAddress;

	
	public UUID getTId() {
		return tId;
	}

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
