package com.iorbit.masterdata;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

class WarehouseData implements Serializable {
	private String address;
	private String capacity;

	WarehouseData(final Warehouse warehouse) {
		this.address = warehouse.getAddress();
		this.capacity = warehouse.getCapacity();
	}

}

public class WarehouseList implements Serializable {
	private List<WarehouseData> warehouses;

	public WarehouseList(final List listwarehouse) {
		this.warehouses = new ArrayList<WarehouseData>();
		System.out.println("Got Warehouse as: " + listwarehouse);
		for (int i = 0; i < listwarehouse.size(); ++i) {
			final WarehouseData data = new WarehouseData((Warehouse) listwarehouse.get(i));
			this.warehouses.add(data);
		}
	}
}
