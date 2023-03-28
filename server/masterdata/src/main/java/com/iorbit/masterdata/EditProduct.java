package com.iorbit.masterdata;

public class EditProduct implements java.io.Serializable {
	private String skuId;
	private String itemName;
	private String itemCategory;
	private String itemSubcategory;
	private String basePrice;

	public EditProduct(Product product) {
		this.skuId = product.getSkuId();
		this.itemName = product.getItemName();
		this.itemCategory = product.getItemCategory();
		this.itemSubcategory = product.getItemSubcategory();
		this.basePrice = product.getBasePrice();
	}

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
