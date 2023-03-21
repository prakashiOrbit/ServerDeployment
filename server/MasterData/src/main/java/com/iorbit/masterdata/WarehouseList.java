package com.iorbit.masterdata;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

class WarehouseData implements Serializable {
	private UUID wId;
	private String address;
	private String capacity;

	WarehouseData(Warehouse warehouse) {
		this.wId = warehouse.getwId();
		this.address = warehouse.getAddress();
		this.capacity = warehouse.getCapacity();
	}

}

public class WarehouseList implements Serializable {
	private List<WarehouseData> farmers;

	public WarehouseList(List listwarehouse) {
		this.farmers = new ArrayList<WarehouseData>();
		System.out.println("Got Warehouse as: " + listwarehouse);
		for (Object element : listwarehouse) {
			WarehouseData data = new WarehouseData((Warehouse) element);
			this.farmers.add(data);
		}
	}
}
