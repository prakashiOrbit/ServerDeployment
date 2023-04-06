package com.iorbit.cart;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class CartList implements java.io.Serializable {
	class CartData implements java.io.Serializable {
		private UUID cartId;

		CartData(Cart cart) {
			this.cartId = cart.getCartId();
			

		}
	}

	private List<CartData> cart;

	public CartList(List listcart) {
		cart = new ArrayList<CartData>();
		System.out.println("Got CartId as: " + listcart);
		for (int i = 0; i < listcart.size(); i++) {
			CartData data = new CartData((Cart) listcart.get(i));
			cart.add(data);
		}
	}
}
