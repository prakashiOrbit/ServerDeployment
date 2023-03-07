package com.iorbit.po;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SearchPurchaseOrdersTemplate implements java.io.Serializable {
	private List<PurchaseOrderTemplate> po;
	private Map search;

	private String searchString;

	void setupSearch() {

		(this.search = new HashMap()).put("searchableValue", "*|" + searchString + "|*");
		this.po = new ArrayList<PurchaseOrderTemplate>();
	}

	public List getPo() {

		return this.po;
	}

}
