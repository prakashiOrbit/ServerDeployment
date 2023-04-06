package com.iorbit.cart;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SearchCart {
	private List<Cart> cart;
	private Map search;
	private String searchString;

	void setupSearch() {

		search = new HashMap();
		search.put("searchableValue", "*|" + searchString + "|*");
		cart = new ArrayList();
	}

	public List getCart() {
		return cart;
	}
}
