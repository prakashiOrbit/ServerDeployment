package com.iorbit.masterdata;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SearchTruck implements Serializable {
	private List<Truck> truck;
	private Map search;
	private String searchString;

	void setupSearch() {
		(this.search = new HashMap()).put("searchableValue", "*|" + this.searchString + "|*");
		this.truck = new ArrayList<Truck>();
	}

	public List getTruck() {
		return this.truck;
	}

}
