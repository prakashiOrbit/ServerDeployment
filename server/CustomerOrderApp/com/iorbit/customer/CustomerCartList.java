package com.iorbit.customer;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class CustomerCartList implements Serializable {
	private List<CustomerCartData> cart;

	public CustomerCartList(final List listcart) {
		this.cart = new ArrayList<CustomerCartData>();
		System.out.println("Got Cart as: " + listcart);
		for (int i = 0; i < listcart.size(); ++i) {
			final CustomerCartData data = new CustomerCartData((CustomerCart) listcart.get(i));
			this.cart.add(data);
		}
	}

	class CustomerCartData implements Serializable {
		private String itemName;
		private String quantity;
		private String unitPrice;
		private String totalPriceWithGST;

		CustomerCartData(final CustomerCart cart) {
			this.itemName = cart.getItemName();
			this.quantity = cart.getQuantity();
			this.unitPrice = cart.getUnitPrice();
			this.totalPriceWithGST = cart.getTotalPriceWithGST();
		}

	}

}
