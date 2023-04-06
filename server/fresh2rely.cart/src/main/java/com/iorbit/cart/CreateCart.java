package com.iorbit.cart;

import java.util.UUID;

public class CreateCart implements java.io.Serializable {
	private String skuId;
	private UUID cartId;
	private String totalPrice;
	private String phoneNumber;
	private UUID cartItemId;
	private String quantity;
	private String itemName;
	private String image;
	private String discountPrice;
	private String itemPrice;

	public CreateCart(String skuId, UUID cartId, String totalPrice, String phoneNumber, UUID cartItemId, String quantity,String itemName,String image,String discountPrice,String itemPrice) {
		this.skuId = skuId;
		this.cartId = UUID.randomUUID();
		this.totalPrice = totalPrice;
		this.phoneNumber = phoneNumber;
		this.cartItemId = UUID.randomUUID();
		this.quantity = quantity;
		this.itemName = itemName;
		this.image = image;
		this.discountPrice = discountPrice;
		this.itemPrice = itemPrice;
	}

	public String getQuantity() {
		return quantity;
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

	public CreateCart(UUID cartId) {
		this.cartId = UUID.randomUUID();
	}

	public UUID getCartItemId() {
		return cartItemId;
	}

	public UUID getCartId() {
		return cartId;
	}

	public String getSkuId() {
		return skuId;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public String getTotalPrice() {
		return totalPrice;
	}

}