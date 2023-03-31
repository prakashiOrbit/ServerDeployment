package com.iorbit.category;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


public class SearchCategory implements java.io.Serializable{
	private List<Category> category;
	private Map search;
	private String searchString;

	void setupSearch() {
		search = new HashMap();
		search.put("searchableValue" , "*|" + searchString + "|*");
		category = new ArrayList();
	}
	
	public List getCategory() { return category;}
	
}