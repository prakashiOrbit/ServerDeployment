package com.iorbit.masterdata;

import java.io.Serializable;

public class Warehouse implements Serializable {

	private String address;
	private String capacity;
	private String searchableValue;

	public Warehouse(final String address, final String capacity) {
		this.address = address;
		this.capacity = capacity;
	}

	public String getAddress() {
		return address;
	}

	public String getCapacity() {
		return capacity;
	}

	public void setCapacity(final String capacity) {
		this.capacity = capacity;
	}

	public void setSearchValues() {
		this.searchableValue = String.valueOf(this.address) + "|" + this.capacity;
	}
}
