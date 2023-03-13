package com.iorbit.item;


public class EditItem  implements java.io.Serializable {
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
	


	public EditItem(Item item) {
		skuId = item.getSKUID();
		categoryName=item.getCategoryName();
		itemName=item.getItemName();
		price=item.getPrice();
		quantity=item.getQuantity();
		description=item.getDescription();
		title=item.getTitle();
		inStock=item.getInStock();
		discountPrice=item.getDiscountPrice();
		image=item.getImage();
	}


	public String getSKUID() { return skuId; }
	public String getCategoryName() { return categoryName;}
	public String getItemName() { return itemName; }
	public String getPrice() { return price; }
	public String getQuantity() { return quantity; }
	public String getDescription() { return description; }
	public String getTitle() { return title; }
	public String getInStock () { return inStock; }
	public String getDiscountPrice () { return discountPrice; }
	public String getImage() { return image; }
	
}