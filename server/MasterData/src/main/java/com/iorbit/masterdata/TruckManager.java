package com.iorbit.masterdata;

import java.io.Serializable;
import java.util.List;

public class TruckManager implements Serializable {
	public void createTruck(CreateTruck createtruck, Truck exist) {
		if (!Validator.validateLicenseNo(createtruck.getLicenseNo())) {
			new MessageResponse("Please enter valid License Number.");
			return;
		}
		if (createtruck.getRegistrationDate() == null || createtruck.getRegistrationDate().trim().length() == 0) {
			new MessageResponse("Registration Date cannot be empty.");
			return;
		}

		if (createtruck.getChassisNo() == null || createtruck.getChassisNo().trim().length() == 0) {
			new MessageResponse("Chassis number cannot be empty.");
			return;
		}
		if (!Validator.isValidAddress(createtruck.getRegAddress())) {
			new MessageResponse("Please enter valid Registered Address.");
			return;
		}
		if (exist != null) {
			new MessageResponse("Truck with the license No " + exist.getLicenseNo() + " Already exists.");
			return;
		}
		Truck truck = new Truck(createtruck.getTId(), createtruck.getLicenseNo(), createtruck.getVinNo(),
				createtruck.getChassisNo(), createtruck.getRegistrationDate(), createtruck.getRegAddress());
		truck.setSearchValues();
		new MessageResponse("Truck is successfully created.");
	}

	public void getTruck(Truck truck) {
		TruckDetails details = new TruckDetails(truck);
	}

	public void setupTruckSearch(SearchTruck listtruck) {
		listtruck.setupSearch();
	}

	public void getTrucks(SearchTruck searchtruck) {
		List farmers = searchtruck.getTruck();
		TruckList trucklist = new TruckList(farmers);
	}

	public void editTruck(EditTruck edit, Truck truck) {

		if (!Validator.validateLicenseNo(edit.getLicenseNo())) {
			new MessageResponse("Please enter valid License Number.");
			return;
		}
		if (edit.getRegistrationDate() == null || edit.getRegistrationDate().trim().length() == 0) {
			new MessageResponse("Registration Date cannot be empty.");
			return;
		}

		if (edit.getChassisNo() == null || edit.getChassisNo().trim().length() == 0) {
			new MessageResponse("Chassis number cannot be empty.");
			return;
		}
		if (!Validator.isValidAddress(edit.getRegAddress())) {
			new MessageResponse("Please enter valid Registered Address.");
			return;
		}
		truck.setLicenseNo(edit.getLicenseNo());
		truck.setVinNo(edit.getVinNo());
		truck.setChassisNo(edit.getChassisNo());
		truck.setRegistrationDate(edit.getRegistrationDate());
		truck.setRegAddress(edit.getRegAddress());

		truck.setSearchValues();
		new MessageResponse("Truck details has been updated.");
	}
}
