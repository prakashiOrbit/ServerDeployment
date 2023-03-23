package com.iorbit.farmer;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SearchFarmers implements java.io.Serializable{
	private List<Farmer> farmer;
	private Map search;
	private String searchString;

	void setupSearch() {
		search = new HashMap();
		search.put("SearchableValue" , "*|" + searchString + "|*");
		farmer = new ArrayList();
	}
	
	public List getFarmer() { return farmer;}
	
}