package com.iorbit.masterdata;

import java.io.Serializable;

public class Product implements Serializable {

	private String skuId;
	private String itemName;
	private String itemCategory;
	private String itemSubcategory;
	private String basePrice;
	private String searchableValue;

	public Product(final String skuId, final String itemName, final String itemCategory, final String itemSubcategory,
			final String basePrice) {
		this.skuId = skuId;
		this.itemName = itemName;
		this.itemCategory = itemCategory;
		this.itemSubcategory = itemSubcategory;
		this.basePrice = basePrice;
	}

	public String getSkuId() {
		return skuId;
	}

	public String getItemName() {
		return itemName;
	}

	public void setItemName(final String itemName) {
		this.itemName = itemName;
	}

	public String getItemCategory() {
		return itemCategory;
	}

	public void setItemCategory(final String itemCategory) {
		this.itemCategory = itemCategory;
	}

	public String getItemSubcategory() {
		return itemSubcategory;
	}

	public void setItemSubcategory(final String itemSubcategory) {
		this.itemSubcategory = itemSubcategory;
	}

	public String getBasePrice() {
		return basePrice;
	}

	public void setBasePrice(String basePrice) {
		this.basePrice = basePrice;
	}

	public void setSearchValues() {
		this.searchableValue = String.valueOf(this.skuId) + "|" + this.itemName;
	}

}
