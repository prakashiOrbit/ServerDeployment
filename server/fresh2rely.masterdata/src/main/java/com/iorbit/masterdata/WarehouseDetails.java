package com.iorbit.masterdata;

import java.io.Serializable;

public class WarehouseDetails implements Serializable {

	private String address;
	private String capacity;

	public WarehouseDetails( Warehouse warehouse) {
		this.address = warehouse.getAddress();
		this.capacity = warehouse.getCapacity();
	}

	public String getAddress() {
		return address;
	}

	public String getCapacity() {
		return capacity;
	}

}
