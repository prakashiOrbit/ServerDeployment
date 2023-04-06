package com.iorbit.cart;

import java.util.UUID;

public class CreateItem implements java.io.Serializable {

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

	public CreateItem(UUID skuId, String categoryName, String itemName, String price, String quantity,
			String description, String title, String inStock, String discountPrice, String image) {

		this.skuId = UUID.randomUUID();
		this.categoryName = categoryName;
		this.itemName = itemName;
		this.price = price;
		this.quantity = quantity;
		this.description = description;
		this.title = title;
		this.inStock = inStock;
		this.discountPrice = discountPrice;
		this.image = image;
	}

	public UUID getSkuId() {
		return skuId;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public String getItemName() {
		return itemName;
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

}