package com.iorbit.masterdata;

import java.io.Serializable;

public class CreateWarehouse implements Serializable {

	public String getAddress() {
		return address;
	}

	public String getCapacity() {
		return capacity;
	}

	private String address;
	private String capacity;

}
