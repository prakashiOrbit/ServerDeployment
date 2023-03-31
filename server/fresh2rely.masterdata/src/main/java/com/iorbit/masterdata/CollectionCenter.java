package com.iorbit.masterdata;

import java.io.Serializable;
import java.util.UUID;

public class CollectionCenter implements Serializable {

	private UUID cId;
	private String centerId;
	private String centerName;
	private String centerAddress;
	private String contact;
	private String searchableValue;

	public CollectionCenter(UUID cId, String centerId, String centerName, String centerAddress, String contact) {

		this.cId = UUID.randomUUID();
		setCenterId(centerId);
		setCenterName(centerName);
		setCenterAddress(centerAddress);
		setContact(contact);
	}

	public UUID getcId() {
		return cId;
	}

	public void setcId(UUID cId) {
		this.cId = cId;
	}

	public String getCenterId() {
		return centerId;
	}

	public void setCenterId(String centerId) {
		this.centerId = centerId;
	}

	public String getCenterName() {
		return centerName;
	}

	public void setCenterName(String centerName) {
		this.centerName = centerName;
	}

	public String getCenterAddress() {
		return centerAddress;
	}

	public void setCenterAddress(String centerAddress) {
		this.centerAddress = centerAddress;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public void setSearchValues() {
		this.searchableValue = centerId + "|" + centerName + "|" + centerAddress + "|" + contact;
	}
}
