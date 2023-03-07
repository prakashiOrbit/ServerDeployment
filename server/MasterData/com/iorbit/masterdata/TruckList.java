package com.iorbit.masterdata;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

class TruckData implements Serializable {
	private String licenseNo;
	private String registrationDate;
	private String VinNo;
	private String chassisNo;
	private String regAddress;

	TruckData(final Truck truck) {
		this.licenseNo = truck.getLicenseNo();
		this.registrationDate = truck.getRegistrationDate();
		this.chassisNo = truck.getChassisNo();
		this.VinNo = truck.getVinNo();
		this.regAddress = truck.getRegAddress();
	}

}

public class TruckList implements Serializable {
	private List<TruckData> truck;

	public TruckList(final List listtruck) {
		this.truck = new ArrayList<TruckData>();
		System.out.println("Got Trucks as: " + listtruck);
		for (int i = 0; i < listtruck.size(); ++i) {
			final TruckData data = new TruckData((Truck) listtruck.get(i));
			this.truck.add(data);
		}
	}

}
