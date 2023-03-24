package com.iorbit.masterdata;

import java.io.Serializable;
import java.util.UUID;

public class CollectionCenterDetails implements Serializable {

	private String centerId;
	private String centerName;
	private String centerAddress;
	private String contact;

	public CollectionCenterDetails(CollectionCenter collectionCenter) {
		this.centerId = collectionCenter.getCenterId();
		this.centerName = collectionCenter.getCenterName();
		this.centerAddress = collectionCenter.getCenterAddress();
		this.contact = collectionCenter.getContact();
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
