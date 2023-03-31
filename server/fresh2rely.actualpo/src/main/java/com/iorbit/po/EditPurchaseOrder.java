package com.iorbit.po;

public class EditPurchaseOrder implements java.io.Serializable {
	private String PoId;
	private String FarmerName;
	private String CollectionCenterName;
	private String Produce;
	private String Quantity;
	private String PickupDate;

	public EditPurchaseOrder(final PurchaseOrder po) {
		this.PoId = po.getPoId();
		this.FarmerName = po.getFarmerName();
		this.CollectionCenterName = po.getCollectionCenterName();
		this.Produce = po.getProduce();
		this.Quantity = po.getQuantity();
		this.PickupDate = po.getPickupDate();
	}

	public String getPoId() {
		return this.PoId;
	}

	public String getFarmerName() {
		return this.FarmerName;
	}

	public String getCollectionCenterName() {
		return this.CollectionCenterName;
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
