package com.iorbit.masterdata;

import java.io.Serializable;
import java.util.UUID;

public class CreateWarehouse implements Serializable {
	
	private UUID wId;
	private String address;
	private String capacity;
	
	
	
	public UUID getWId() {
		return wId;
	}

	public String getAddress() {
		return address;
	}

	public String getCapacity() {
		return capacity;
	}

}
