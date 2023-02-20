package com.iorbit.customer;

import java.io.Serializable;
import java.util.List;

public class CustomerCartManager implements Serializable {

	public void viewCustomerCart(final CustomerCart cart) {
		final CustomerCartDetails details = new CustomerCartDetails(cart);
	}

	public void setupCartSearch(final SearchCustomerCart listcart) {
		listcart.setupSearch();
	}

	public void viewCustomerCarts(final SearchCustomerCart searchcart) {
		final List cart = searchcart.viewCart();
		final CustomerCartList list = new CustomerCartList(cart);
	}

}
