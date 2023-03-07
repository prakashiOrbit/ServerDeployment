package com.iorbit.masterdata;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SearchWarehouse implements Serializable {
	private List<Warehouse> warehouse;
	private Map search;
	private String searchString;

	void setupSearch() {
		(this.search = new HashMap()).put("searchableValue", "*|" + this.searchString + "|*");
		this.warehouse = new ArrayList<Warehouse>();
	}

	public List getWarehouse() {
		return this.warehouse;
	}

}
