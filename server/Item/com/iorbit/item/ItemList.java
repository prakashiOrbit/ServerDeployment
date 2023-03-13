package com.iorbit.item;

import java.util.ArrayList;
import java.util.List;


public class ItemList implements java.io.Serializable{
	class ItemData implements java.io.Serializable{
		private String skuId;
		private String categoryName;
		private String itemName;
		private String price;
		private String quantity;
		private String description;
		private String title;
		private String inStock;
		private String discountPrice;
		private String image;

		
		ItemData(Item item){
			skuId = item.getSKUID();
			itemName=item.getItemName();
			categoryName=item.getCategoryName();
			price=item.getPrice();
			quantity=item.getQuantity();
			description=item.getDescription();
			title=item.getTitle();
			inStock=item.getInStock();
			discountPrice=item.getDiscountPrice();
			image=item.getImage();
			
		}
	}
	
	private List<ItemData> item;
	
	public ItemList(List listitem) {
		item=new ArrayList<ItemData>();
		System.out.println("Got items as: "+listitem);
		for(int i=0;i<listitem.size();i++) {
			ItemData data=new ItemData((Item)listitem.get(i));
			item.add(data);
		}
	}
}
