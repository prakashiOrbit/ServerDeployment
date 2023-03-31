package com.iorbit.masterdata;

import java.io.Serializable;
import java.util.UUID;

public class Warehouse implements Serializable {
	
	private UUID wId;
	private String address;
	private String capacity;
	private String searchableValue;

	public Warehouse(UUID wId, String address,  String capacity) {
		this.wId=UUID.randomUUID();
		this.address = address;
		this.capacity = capacity;
	}

	public UUID getwId() {
		return wId;
	}

	public void setwId(UUID wId) {
		this.wId = wId;
	}



	public void setAddress(String address) {
		this.address = address;
	}

	public void setSearchableValue(String searchableValue) {
		this.searchableValue = searchableValue;
	}

	public String getAddress() {
		return address;
	}

	public String getCapacity() {
		return capacity;
	}

	public void setCapacity( String capacity) {
		this.capacity = capacity;
	}

	public void setSearchValues() {
		this.searchableValue = wId + "|" + address + "|" + capacity;
	}
}
