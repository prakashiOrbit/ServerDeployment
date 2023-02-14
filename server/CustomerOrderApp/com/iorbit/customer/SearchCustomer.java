package com.iorbit.customer;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import java.io.Serializable;

public class SearchCustomer implements Serializable {
	private List<CustomerOrder> customer;
	private Map search;
	private String searchString;

	void setupSearch() {
		(this.search = new HashMap()).put("searchableValue", "*|" + this.searchString + "|*");
		this.customer = new ArrayList<CustomerOrder>();
	}

	public List viewCustomer() {
		return this.customer;
	}
}
