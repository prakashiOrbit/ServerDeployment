package com.iorbit.masterdata;

import java.io.Serializable;
import java.util.List;

public class TruckManager implements Serializable {
	public void createTruck(final CreateTruck createtruck, final Truck exist) {
		if (!Validator.validateLicenseNo(createtruck.getLicenseNo())) {
			new MessageResponse("Please enter valid License Number.");
			return;
		}
		if (createtruck.getRegistrationDate() == null || createtruck.getRegistrationDate().trim().length() == 0) {
			new MessageResponse("Registration Date cannot be empty.");
			return;
		}

//		if (!Validator.validateVinNo(createtruck.getVinNo())) {
//			new MessageResponse("Please enter valid VIN Number.");
//			return;
//		}

		if (createtruck.getChassisNo() == null || createtruck.getChassisNo().trim().length() == 0) {
			new MessageResponse("Chassis number cannot be empty.");
			return;
		}
		if (createtruck.getRegAddress() == null || createtruck.getRegAddress().trim().length() == 0) {
			new MessageResponse("Registered Address cannot be empty.");
			return;
		}
		if (exist != null) {
			new MessageResponse("Truck with the license No " + exist.getLicenseNo() + " Already exists.");
			return;
		}
		final Truck truck = new Truck(createtruck.getLicenseNo(), createtruck.getVinNo(), createtruck.getChassisNo(),
				createtruck.getRegistrationDate(), createtruck.getRegAddress());
		truck.setSearchValues();
		new MessageResponse("Truck is successfully created.");
	}

	public void getTruck(final Truck truck) {
		final TruckDetails details = new TruckDetails(truck);
	}

	public void setupTruckSearch(final SearchTruck listtruck) {
		listtruck.setupSearch();
	}

	public void getTrucks(final SearchTruck searchtruck) {
		final List trucks = searchtruck.getTruck();
		final TruckList trucklist = new TruckList(trucks);
	}

	public void editTruck(final EditTruck edit, final Truck truck) {
		
		if (edit.getRegistrationDate() == null || edit.getRegistrationDate().trim().length() == 0) {
			new MessageResponse("Registration Date cannot be empty.");
			return;
		}

//		if (!Validator.validateVinNo(edit.getVinNo())) {
//			new MessageResponse("Please enter valid VIN Number.");
//			return;
//		}

		if (edit.getChassisNo() == null || edit.getChassisNo().trim().length() == 0) {
			new MessageResponse("Chassis number cannot be empty.");
			return;
		}
		if (edit.getRegAddress() == null || edit.getRegAddress().trim().length() == 0) {
			new MessageResponse("Registered Address cannot be empty.");
			return;
		}
		truck.setVinNo(edit.getVinNo());
		truck.setChassisNo(edit.getChassisNo());
		truck.setRegistrationDate(edit.getRegistrationDate());
		truck.setRegAddress(edit.getRegAddress());

		truck.setSearchValues();
		new MessageResponse("Truck details has been updated.");
	}
}
