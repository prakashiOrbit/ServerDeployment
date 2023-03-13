package com.iorbit.masterdata;

import java.io.Serializable;

public class CollectionCenterDetails implements Serializable {

	private String centerId;
	private String centerName;
	private String centerAddress;
	private String contact;

	public CollectionCenterDetails(final CollectionCenter cc) {
		this.centerId = cc.getCenterId();
		this.centerName = cc.getCenterName();
		this.centerAddress = cc.getCenterAddress();
		this.contact = cc.getContact();
	}

	public String getCenterId() {
		return centerId;
	}

	public String getCenterName() {
		return centerName;
	}

	public String getCenterAddress() {
		return centerAddress;
	}

	public String getContact() {
		return contact;
	}
}
