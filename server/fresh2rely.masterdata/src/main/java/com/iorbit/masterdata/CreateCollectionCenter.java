package com.iorbit.masterdata;

import java.io.Serializable;
import java.util.UUID;

public class CreateCollectionCenter implements Serializable {
	private UUID cId;
	private String centerId;
	private String centerName;
	private String centerAddress;
	private String contact;

	public UUID getcId() {
		return cId;
	}

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
