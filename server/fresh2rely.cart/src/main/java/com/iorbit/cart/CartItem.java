package com.iorbit.cart;

import java.util.UUID;

public class CartItem implements java.io.Serializable {
	private String skuId;
	private UUID cartId;
	private UUID cartItemId;
	private String quantity;
	private String totalPrice;

	public String getTotalPrice() {
		return totalPrice;
	}

	public CartItem(Cart cart, UUID cartItemId) {
		this.cartId = cart.getCartId();
		this.cartItemId = UUID.randomUUID();
		this.quantity = cart.getQuantity();
		this.skuId = cart.getSkuId();
		this.quantity = cart.getQuantity();
		this.totalPrice = cart.getTotalPrice();

	}

	public String getQuantity() {
		return quantity;
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

	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}

	public UUID getCartId() {
		return cartId;
	}

	public void setCartId(UUID cartId) {
		this.cartId = cartId;
	}

	public UUID getCartItemId() {
		return cartItemId;
	}

	public void setCartItemId(UUID cartItemId) {
		this.cartItemId = cartItemId;
	}

}