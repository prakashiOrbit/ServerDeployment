package com.iorbit.customer;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SearchCustomerOrder implements java.io.Serializable{
	private List<CustomerOrder> customerorder;
	private Map search;
	private String searchString;

	void setupSearch() {
		search = new HashMap();
		search.put("SearchableValue" , "*|" + searchString + "|*");
		customerorder = new ArrayList();
	}
	
	public List getCustomerOrder() { return customerorder;}
	
}