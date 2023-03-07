package com.iorbit.masterdata;

import java.io.Serializable;
import java.util.List;

public class WarehouseManager implements Serializable {
	public void createWarehouse(final CreateWarehouse createwarehouse, final Warehouse exist) {
		if (createwarehouse.getAddress() == null || createwarehouse.getAddress().trim().length() == 0) {
			new MessageResponse("Address cannot be empty.");
			return;
		}
		if (createwarehouse.getCapacity() == null || createwarehouse.getCapacity().trim().length() == 0) {
			new MessageResponse("Warehouse capacity must be filled.");
			return;
		}

		if (exist != null) {
			new MessageResponse("Warehouse with the Address " + exist.getAddress() + " Already exists.");
			return;
		}
		final Warehouse warehouse = new Warehouse(createwarehouse.getAddress(), createwarehouse.getCapacity());
		warehouse.setSearchValues();
		new MessageResponse("Warehouse is successfully created.");
	}

	public void getWarehouse(final Warehouse warehouse) {
		final WarehouseDetails details = new WarehouseDetails(warehouse);
	}

	public void setupWarehouseSearch(final SearchWarehouse listwarehouse) {
		listwarehouse.setupSearch();
	}

	public void getWarehouses(final SearchWarehouse searchwarehouse) {
		final List warehouses = searchwarehouse.getWarehouse();
		final WarehouseList warehouselist = new WarehouseList(warehouses);
	}

	public void editWarehouse(final EditWarehouse edit, final Warehouse warehouse) {
		
		if (edit.getCapacity() == null || edit.getCapacity().trim().length() == 0) {
			new MessageResponse("Capacity must be filled.");
			return;
		}

		warehouse.setCapacity(edit.getCapacity());
		warehouse.setSearchValues();
		new MessageResponse("Warehouse details has been updated.");
	}
}
