package com.iorbit.masterdata;

public class CreateProduct implements java.io.Serializable {

	private String skuId;
	private String itemName;
	private String itemCategory;
	private String itemSubcategory;
	private String basePrice;

	public String getSkuId() {
		return skuId;
	}

	public String getItemName() {
		return itemName;
	}

	public String getItemCategory() {
		return itemCategory;
	}

	public String getItemSubcategory() {
		return itemSubcategory;
	}

	public String getBasePrice() {
		return basePrice;
	}

}
