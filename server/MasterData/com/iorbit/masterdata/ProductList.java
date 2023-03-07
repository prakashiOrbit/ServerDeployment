package com.iorbit.masterdata;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class ProductList implements Serializable {
	private List<ProductData> products;

	public ProductList(final List listproduct) {
		this.products = new ArrayList<ProductData>();
		System.out.println("Got Products as: " + listproduct);
		for (int i = 0; i < listproduct.size(); ++i) {
			final ProductData data = new ProductData((Product) listproduct.get(i));
			this.products.add(data);
		}
	}

	class ProductData implements Serializable {
		private String skuId;
		private String itemName;
		private String itemCategory;
		private String itemSubcategory;
		private String basePrice;

		ProductData(final Product product) {
			this.skuId = product.getSkuId();
			this.itemName = product.getItemName();
			this.itemCategory = product.getItemCategory();
			this.itemSubcategory = product.getItemSubcategory();
			this.basePrice = product.getBasePrice();
		}

	}
}
