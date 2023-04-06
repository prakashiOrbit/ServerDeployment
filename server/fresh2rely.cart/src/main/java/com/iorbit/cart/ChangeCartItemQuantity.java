package com.iorbit.cart;

public class ChangeCartItemQuantity {

	private String quantity;

	public String getQuantity() {
		return quantity;
	}

	public ChangeCartItemQuantity(CartItem cart, String quantity) {

		this.quantity = cart.getQuantity();

	}

}