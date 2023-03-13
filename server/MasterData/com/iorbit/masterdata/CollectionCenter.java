package com.iorbit.masterdata;

import java.io.Serializable;

public class CollectionCenter implements Serializable {

	private String centerId;
	private String centerName;
	private String centerAddress;
	private String contact;
	private String searchableValue;

	public CollectionCenter(final String centerId, final String centerName, final String centerAddress,
			final String contact) {
		this.centerId = centerId;
		this.centerName = centerName;
		this.centerAddress = centerAddress;
		this.contact = contact;
	}
	public CollectionCenter(final String centerName, final String centerAddress,
			final String contact) {
		this.centerName = centerName;
		this.centerAddress = centerAddress;
		this.contact = contact;
	}

	public CollectionCenter(final String searchable) {
		// TODO Auto-generated constructor stub
	}

	public String getCenterId() {
		return centerId;
	}

	public String getCenterName() {
		return centerName;
	}

	public void setCenterName(final String centerName) {
		this.centerName = centerName;
	}

	public String getCenterAddress() {
		return centerAddress;
	}

	public void setCenterAddress(final String centerAddress) {
		this.centerAddress = centerAddress;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(final String contact) {
		this.contact = contact;
	}

	public void setSearchValues() {
		this.searchableValue = String
				.valueOf(this.centerId) + "|" + this.centerName + "|" + this.centerAddress + "|" + this.contact;
	}
}
