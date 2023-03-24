package com.iorbit.masterdata;

import java.io.Serializable;
import java.util.UUID;

public class CreateProduct implements Serializable {
	
	private UUID pId;
	private String skuId;
	private String itemName;
	private String itemCategory;
	private String itemSubcategory;
	private String basePrice;
		
	public UUID getpId() { return pId; }
	public String getSkuId() { return skuId; }
	public String getItemName() { return itemName; }
	public String getItemCategory() { return itemCategory; }
	public String getItemSubcategory() { return itemSubcategory; }
	public String getBasePrice() { return basePrice; }

}
