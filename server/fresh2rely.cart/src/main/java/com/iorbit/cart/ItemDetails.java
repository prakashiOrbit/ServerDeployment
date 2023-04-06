package com.iorbit.cart;

import java.util.List;
import java.util.UUID;

public class ItemDetails implements java.io.Serializable {
	private UUID skuId;
	private String categoryName;
	private String itemName;
	private String price;
	private String quantity;
	private String description;
	private String title;
	private String inStock;
	private String discountPrice;
	private String image;

	public ItemDetails(Item item) {
		skuId = item.getSkuId();
		categoryName = item.getCategoryName();
		itemName = item.getItemName();
		price = item.getPrice();
		quantity = item.getQuantity();
		description = item.getDescription();
		title = item.getTitle();
		inStock = item.getInStock();
		discountPrice = item.getDiscountPrice();
		image = item.getImage();

	}

	public ItemDetails() {
		// TODO Auto-generated constructor stub
	}

	public UUID getSkuId() {
		return skuId;
	}

	public String getItemName() {
		return itemName;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public String getPrice() {
		return price;
	}

	public String getQuantity() {
		return quantity;
	}

	public String getDescription() {
		return description;
	}

	public String getTitle() {
		return title;
	}

	public String getInStock() {
		return inStock;
	}

	public String getDiscountPrice() {
		return discountPrice;
	}

	public String getImage() {
		return image;
	}

	public void add(Item item, List<Item> item2) {
		// TODO Auto-generated method stub

	}

}
