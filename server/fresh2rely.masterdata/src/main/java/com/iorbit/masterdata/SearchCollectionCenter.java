package com.iorbit.masterdata;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SearchCollectionCenter implements Serializable {
	private List<CollectionCenter> collectionCenter;
	private Map search;
	private String searchString;

	void setupSearch() {
		(this.search = new HashMap()).put("searchableValue", "*|" + this.searchString + "|*");
		this.collectionCenter = new ArrayList<CollectionCenter>();
	}

	public List getCollectionCenter() {
		return this.collectionCenter;
	}
}
