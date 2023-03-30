package com.iorbit.masterdata;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SearchProduct implements Serializable {
	private List<Product> product;
	private Map search;
	private String searchString;

	void setupSearch() {
		(this.search = new HashMap()).put("searchableValue", "*|" + this.searchString + "|*");
		this.product = new ArrayList<Product>();
	}

	public List getProduct() {
		return this.product;
	}

}
