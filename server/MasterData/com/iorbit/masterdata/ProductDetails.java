package com.iorbit.masterdata;

import java.io.Serializable;

public class ProductDetails implements Serializable {

	private String skuId;
	private String itemName;
	private String itemCategory;
	private String itemSubcategory;
	private String basePrice;

	ProductDetails(final Product product) {
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
