package com.iorbit.masterdata;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

class TruckData implements Serializable {
	private UUID tId;
	private String licenseNo;
	private String registrationDate;
	private String VinNo;
	private String chassisNo;
	private String regAddress;

	TruckData(Truck truck) {
		this.tId = truck.gettId();
		this.licenseNo = truck.getLicenseNo();
		this.registrationDate = truck.getRegistrationDate();
		this.chassisNo = truck.getChassisNo();
		this.VinNo = truck.getVinNo();
		this.regAddress = truck.getRegAddress();
	}

}

public class TruckList implements Serializable {
	private List<TruckData> farmers;

	public TruckList(List listtruck) {
		this.farmers = new ArrayList<TruckData>();
		System.out.println("Got Trucks as: " + listtruck);
		for (Object element : listtruck) {
			 TruckData data = new TruckData((Truck) element);
			this.farmers.add(data);
		}
	}

}
