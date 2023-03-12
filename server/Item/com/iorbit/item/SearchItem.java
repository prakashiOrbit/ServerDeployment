package com.iorbit.item;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SearchItem implements java.io.Serializable{
	private List<Item> item;
	private Map search;
	private String searchString;

	void setupSearch() {
		search = new HashMap();
		search.put("searchableValue" , "*|" + searchString + "|*");
		item = new ArrayList();
	}
	
	public List getItem() { return item;}
	
}

