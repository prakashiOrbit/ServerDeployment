package com.iorbit.masterdata;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

class CollectionCenterData implements Serializable {
	private String centerId;
	private String centerName;
	private String centerAddress;
	private String contact;

	CollectionCenterData(final CollectionCenter cc) {
		this.centerId = cc.getCenterId();
		this.centerName = cc.getCenterName();
		this.centerAddress = cc.getCenterAddress();
		this.contact = cc.getContact();
	}
}

public class CollectionCenterList implements Serializable {
	private List<CollectionCenterData> cd;

	public CollectionCenterList(final List listcenter) {
		this.cd = new ArrayList<CollectionCenterData>();
		System.out.println("Got Collection Center's as: " + listcenter);
		for (int i = 0; i < listcenter.size(); ++i) {
			final CollectionCenterData data = new CollectionCenterData((CollectionCenter) listcenter.get(i));
			this.cd.add(data);
		}
	}

}
