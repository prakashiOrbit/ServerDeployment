package com.iorbit.masterdata;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

class ProductData implements Serializable {
	private UUID pId;
	private String skuId;
	private String itemName;
	private String itemCategory;
	private String itemSubcategory;
	private String basePrice;

	ProductData(Product product) {
		this.pId = product.getpId();
		this.skuId = product.getSkuId();
		this.itemName = product.getItemName();
		this.itemCategory = product.getItemCategory();
		this.itemSubcategory = product.getItemSubcategory();
		this.basePrice = product.getBasePrice();
	}

}

public class ProductList implements Serializable {
	private List<ProductData> farmers;

	public ProductList(List listproduct) {
		this.farmers = new ArrayList<ProductData>();
		System.out.println("Got Products as: " + listproduct);
		for (Object element : listproduct) {
			ProductData data = new ProductData((Product) element);
			this.farmers.add(data);
		}
	}

}
