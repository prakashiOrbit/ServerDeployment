package com.iorbit.masterdata;

import java.io.Serializable;

public class EditTruck implements Serializable {

	private String licenseNo;
	private String registrationDate;
	private String VinNo;
	private String chassisNo;
	private String regAddress;

	public EditTruck(Truck truck) {
		this.licenseNo = truck.getLicenseNo();
		this.VinNo = truck.getVinNo();
		this.chassisNo = truck.getChassisNo();
		this.registrationDate = truck.getRegistrationDate();
		this.regAddress = truck.getRegAddress();
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
