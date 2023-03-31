package com.iorbit.po;

public class PurchaseOrder implements java.io.Serializable {

	public void setPoId(String poId) {
		PoId = poId;
	}

	public void setFarmerName(String farmerName) {
		FarmerName = farmerName;
	}

	public void setCollectionCenterName(String collectionCenterName) {
		CollectionCenterName = collectionCenterName;
	}

	public void setProduce(String produce) {
		Produce = produce;
	}

	public void setQuantity(String quantity) {
		Quantity = quantity;
	}

	public void setPickupDate(String pickupDate) {
		PickupDate = pickupDate;
	}

	public void setSearchableValue(String searchableValue) {
		SearchableValue = searchableValue;
	}

	private String PoId;
	private String FarmerName;
	private String CollectionCenterName;
	private String Produce;
	private String Quantity;
	private String PickupDate;
	private String SearchableValue;

	public PurchaseOrder(final String PoId, final String FarmerName, final String CollectionCenterName,
			final String Produce, final String Quantity, final String PickupDate) {
		this.PoId = PoId;
		this.FarmerName = FarmerName;
		this.CollectionCenterName = CollectionCenterName;
		this.Produce = Produce;
		this.Quantity = Quantity;
		this.PickupDate = PickupDate;
	}

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

	public void setSearchValues() {
		if (PoId == null || PoId.isEmpty()) {
			throw new IllegalArgumentException("poId is a required field");
		}
		if (FarmerName == null || CollectionCenterName == null || Produce == null || Quantity == null) {
			throw new IllegalArgumentException(
					"FarmerName, CollectionCenterName, Produce, Quantity, and Payment_tatus are required fields");
		}
		// SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		if (PickupDate == null || PickupDate.trim().isEmpty()) {
			throw new IllegalArgumentException("Pickup date cannot be empty or null.");
		}
		this.SearchableValue = String.valueOf(this.PoId) + "|" + this.FarmerName + "|" + this.CollectionCenterName + "|"
				+ this.Produce + "|" + this.Quantity + "|" + this.PickupDate;
	}

}
