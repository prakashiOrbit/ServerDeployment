package com.iorbit.masterdata;

import java.io.Serializable;

public class CreateCollectionCenter implements Serializable {

	private String centerId;
	private String centerName;
	private String centerAddress;
	private String contact;

	public String getCenterId() {
		return this.centerId;
	}

	public String getCenterName() {
		return this.centerName;
	}

	public String getCenterAddress() {
		return this.centerAddress;
	}

	public String getContact() {
		return this.contact;
	}
}
