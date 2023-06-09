package com.iorbit.farmer;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class FarmerList implements java.io.Serializable {
	class FarmerData implements java.io.Serializable {
		private UUID fId;
		private String farmerId;
		private String name;
		private String phoneNo;
		private String streetAddress;
		private String city;
		private String state;
		private String pinCode;
		private String aadharNo;
		private String panNo;
		private String payeeName;
		private String accountNo;
		private String ifscCode;
		private String centerId;
		private String centerName;

		FarmerData(Farmer farmer) {
			fId=farmer.getFId();
			farmerId=farmer.getFarmerId();
			name = farmer.getName();
			phoneNo = farmer.getPhoneNo();
			streetAddress = farmer.getStreetAddress();
			city = farmer.getCity();
			state = farmer.getState();
			pinCode = farmer.getPinCode();
			aadharNo = farmer.getAadharNo();
			panNo = farmer.getPanNo();
			payeeName = farmer.getPayeeName();
			accountNo = farmer.getAccountNo();
			ifscCode = farmer.getIfscCode();
			centerId = farmer.getCenterId();
			centerName = farmer.geteCenterName();
		}
	}

	private List<FarmerData> farmers;

	public FarmerList(List listfarmer) {
		farmers = new ArrayList<FarmerData>();
		System.out.println("Got Farmers as: " + listfarmer);
		for (int i = 0; i < listfarmer.size(); i++) {
			FarmerData data = new FarmerData((Farmer) listfarmer.get(i));
			farmers.add(data);
		}
	}
}
