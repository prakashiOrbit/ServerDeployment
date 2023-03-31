package com.iorbit.masterdata;

import java.io.Serializable;
import java.util.UUID;

public class Product implements Serializable {
	private UUID pId;
	private String skuId;
	private String itemName;
	private String itemCategory;
	private String itemSubcategory;
	private String basePrice;
	private String searchableValue;

	public Product(UUID pID,String skuId, String itemName, String itemCategory, String itemSubcategory, String basePrice) {
		this.pId=UUID.randomUUID();
		this.skuId = skuId;
		this.itemName = itemName;
		this.itemCategory = itemCategory;
		this.itemSubcategory = itemSubcategory;
		this.basePrice = basePrice;
	}

	
	
	public UUID getpId() {
		return pId;
	}

	public String getSearchableValue() {
		return searchableValue;
	}

	public String getSkuId() {
		return skuId;
	}

	public void setpId(UUID pId) {
		this.pId = pId;
	}



	public void setSkuId(String skuId) {
		this.skuId = skuId;
	}



	public void setSearchableValue(String searchableValue) {
		this.searchableValue = searchableValue;
	}



	public String getItemName() {
		return itemName;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
	}

	public String getItemCategory() {
		return itemCategory;
	}

	public void setItemCategory(String itemCategory) {
		this.itemCategory = itemCategory;
	}

	public String getItemSubcategory() {
		return itemSubcategory;
	}

	public void setItemSubcategory(String itemSubcategory) {
		this.itemSubcategory = itemSubcategory;
	}

	public String getBasePrice() {
		return basePrice;
	}

	public void setBasePrice(String basePrice) {
		this.basePrice = basePrice;
	}

	public void setSearchValues() {
		this.searchableValue =  pId + "|" + skuId + "|" + itemName + "|" + itemCategory + "|"
				+ itemSubcategory + "|" + basePrice;
	}

}
