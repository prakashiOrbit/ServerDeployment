package com.iorbit.cart;

import java.util.ArrayList;
import java.io.Serializable;
import java.util.List;

public class GetAssignedItems implements Serializable{

	private List<String> items;

	public GetAssignedItems() {
	}

//	public void setupItems(List<Item> item) {
//		items = new ArrayList<String>();
//		for (int i = 0; (item != null) && (i < item.size()); i++) {
//			items.add(item.get(i).getSkuId());
//		}
//	}

}