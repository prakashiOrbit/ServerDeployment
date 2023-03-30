package com.iorbit.masterdata;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class CollectionCenterList implements Serializable {
	class CollectionCenterData implements Serializable {

		private UUID cId;
		private String centerId;
		private String centerName;
		private String centerAddress;
		private String contact;

		CollectionCenterData(CollectionCenter cc) {
			this.cId = cc.getcId();
			this.centerId = cc.getCenterId();
			this.centerName = cc.getCenterName();
			this.centerAddress = cc.getCenterAddress();
			this.contact = cc.getContact();
		}
	}

	private List<CollectionCenterData> farmers;

	public CollectionCenterList(List listcenter) {
		this.farmers = new ArrayList<CollectionCenterData>();
		System.out.println("Got Collection Center's as: " + listcenter);
		for (Object element : listcenter) {
			final CollectionCenterData data = new CollectionCenterData((CollectionCenter) element);
			this.farmers.add(data);
		}
	}

}
