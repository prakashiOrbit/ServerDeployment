
package com.iorbit.masterdata;

import java.io.Serializable;
import java.util.UUID;

public class ProductDetails implements Serializable {
	private UUID pId;
	private String skuId;
	private String itemName;
	private String itemCategory;
	private String itemSubcategory;
	private String basePrice;

	public ProductDetails(Product product) {
		this.pId = product.getpId();
		this.skuId = product.getSkuId();
		this.itemName = product.getItemName();
		this.itemCategory = product.getItemCategory();
		this.itemSubcategory = product.getItemSubcategory();
		this.basePrice = product.getBasePrice();
	}
	
	public UUID getPId() {
		return pId;
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
