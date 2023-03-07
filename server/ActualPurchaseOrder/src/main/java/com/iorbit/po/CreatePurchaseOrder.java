package com.iorbit.po;

public class CreatePurchaseOrder implements java.io.Serializable {
	private String PoId;
	private String FarmerName;
	private String CollectionCenterName;
	private String Produce;
	private String Quantity;
	private String PickupDate;
	

	public String getPoId() {
		return this.PoId;
	}

	public String getCollectionCenterName() {
		return this.CollectionCenterName;
	}

	public String getFarmerName() {
		return this.FarmerName;
	}

	public String getProduce() {
		return this.Produce;
	}

	public String getQuantity() {
		return this.Quantity;
	}

	public String getPickupDate() {
		return this.PickupDate;
	}


}
