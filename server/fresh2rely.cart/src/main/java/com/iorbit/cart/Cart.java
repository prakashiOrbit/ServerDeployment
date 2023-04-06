package com.iorbit.cart;

import java.util.UUID;

public class Cart implements java.io.Serializable {
	private String skuId;
	private UUID cartId;
	private String phoneNumber;
	private String quantity;
	private int totalItems = 0;
	private String totalPrice;
	private String itemName;
	private String image;
	private String discountPrice;
	private String itemPrice;
	private String searchableValue;

	public Cart(String skuId, UUID cartId, String phoneNumber, String quantity, String totalPrice, String itemName,
			String image, String discountPrice, String itemPrice) {
		this.skuId = skuId;
		this.cartId = UUID.randomUUID();
		this.phoneNumber = phoneNumber;
		this.quantity = quantity;
		this.totalPrice = totalPrice;
		this.itemName = itemName;
		this.image = image;
		this.discountPrice = discountPrice;
		this.itemPrice = itemPrice;

	}
	public void setSearchableValue() {
		
	}

	public Cart(String searchable) {

	}

	public Cart() {
		totalItems = 0;
	}

	public String getItemName() {
		return itemName;
	}

	public String getImage() {
		return image;
	}

	public String getDiscountPrice() {
		return discountPrice;
	}

	public String getItemPrice() {
		return itemPrice;
	}

	public void addItem(CartItem item) {
		totalItems++;
	}

	public UUID getCartId() {
		return cartId;
	}

	public String getTotalPrice() {
		return totalPrice;
	}

	public int getTotalItems() {
		return totalItems;
	}

	

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void addItem(String skuId, String quantity) {
		this.setSkuId(skuId);

	}

	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}

	public String getQuantity() {
		return quantity;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public void setDiscountPrice(String discountPrice) {
		this.discountPrice = discountPrice;
	}

	public void setItemPrice(String itemPrice) {
		this.itemPrice = itemPrice;
	}

	public void setTotalPrice(String totalPrice) {
		this.totalPrice = totalPrice;
	}

	public String getSkuId() {
		return skuId;
	}

	public void setSkuId(String skuId) {
		this.skuId = skuId;
	}
	public void setSearchValues() {

		searchableValue = cartId + "|" + phoneNumber + "|" + quantity;;
	}

}