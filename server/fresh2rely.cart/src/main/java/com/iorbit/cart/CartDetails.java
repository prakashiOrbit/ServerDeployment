package com.iorbit.cart;

import java.util.UUID;

public class CartDetails {
	private UUID cartId;
	private String skuId;
	private String itemName;
	private String image;
	private String discountPrice;
	private String itemPrice;
	private String quantity;

	public CartDetails(Cart cart) {
		cartId = cart.getCartId();
		skuId = cart.getSkuId();
		itemName = cart.getItemName();
		image = cart.getImage();
		discountPrice = cart.getDiscountPrice();
		itemPrice = cart.getItemPrice();
		quantity = cart.getQuantity();
	}

	public String getItemName() {
		return itemName;
	}

	public String getSkuId() {
		return skuId;
	}

	public String getImage() {
		return image;
	}

	public String getDiscountPrice() {
		return discountPrice;
	}

	public UUID getCartId() {
		return cartId;
	}

	public String getItemPrice() {
		return itemPrice;
	}

	public String getQuantity() {
		return quantity;
	}

}
