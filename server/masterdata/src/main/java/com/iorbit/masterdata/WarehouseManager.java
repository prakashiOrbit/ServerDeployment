package com.iorbit.masterdata;

import java.io.Serializable;
import java.util.List;

public class WarehouseManager implements Serializable {
	public void createWarehouse(CreateWarehouse createwarehouse, Warehouse exist) {
		if (createwarehouse.getAddress()== null || createwarehouse.getAddress().length() == 0) {
			new MessageResponse("Warehouse Address cannot be empty.");
			return;
		}
		if (!Validator.validateNumberInput(createwarehouse.getCapacity())) {
			new MessageResponse("Entered Capacity is not valid.Please enter Valid Capacity.");
			return;	
		}

		if (exist != null) {
			new MessageResponse("Warehouse with the Address " + exist.getAddress() + " Already exists.");
			return;
		}
		Warehouse warehouse = new Warehouse(createwarehouse.getWId(),createwarehouse.getAddress(), createwarehouse.getCapacity());
		warehouse.setSearchValues();
		new MessageResponse("Warehouse is successfully created.");
	}

	public void getWarehouse(Warehouse warehouse) {
		WarehouseDetails details = new WarehouseDetails(warehouse);
	}

	public void setupWarehouseSearch(SearchWarehouse listwarehouse) {
		listwarehouse.setupSearch();
	}

	public void getWarehouses(SearchWarehouse searchwarehouse) {
		List farmers = searchwarehouse.getWarehouse();
		WarehouseList warehouselist = new WarehouseList(farmers);
	}

	public void editWarehouse(EditWarehouse edit, Warehouse warehouse) {

		if (edit.getAddress()== null || edit.getAddress().length() == 0) {
			new MessageResponse("Warehouse Address cannot be empty.");
			return;
		}
		if (!Validator.validateNumberInput(edit.getCapacity())) {
			new MessageResponse("Entered Capacity is not valid.Please enter Valid Capacity.");
			return;	
		}
		warehouse.setAddress(edit.getAddress());
		warehouse.setCapacity(edit.getCapacity());
		warehouse.setSearchValues();
		new MessageResponse("Warehouse details has been updated.");
	}
}
