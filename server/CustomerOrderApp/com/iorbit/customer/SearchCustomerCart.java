package com.iorbit.customer;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.io.Serializable;

public class SearchCustomerCart implements Serializable {
	private List<CustomerCart> cart;
	private Map search;
	private String searchString;

	void setupSearch() {
		(this.search = new HashMap()).put("searchableValue", "*|" + this.searchString + "|*");
		this.cart = new ArrayList<CustomerCart>();
	}

	public List viewCart() {
		return this.cart;
	}
}
