package com.iorbit.item;


	public class Item implements java.io.Serializable {

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
		
		private String searchableValue;

		public Item(String skuId, String categoryName,String itemName,String price,String quantity ,String description,String title,String inStock,String discountPrice,String image) {

			this.skuId= skuId;
			this.categoryName=categoryName;
			this.itemName = itemName;
			this.price = price;
			this.quantity = quantity;
			this.description=description;
			this.title=title;
			this.inStock=inStock;
			this.discountPrice=discountPrice;
			this.image = image;
		}
		public Item(String categoryName,String itemName,String price,String quantity ,String description,String title,String inStock,String discountPrice,String image ) {

			this.categoryName=categoryName;
			this.itemName = itemName;
			this.price = price;
			this.quantity = quantity;
			this.description=description;
			this.title=title;
			this.inStock=inStock;
			this.discountPrice=discountPrice;
			this.image=image;
			
		}
		
		public Item(String searchable) {

		}
		
		public String getSKUID() { return skuId; }
		public String getCategoryName() { return categoryName;}
		public void setCategoryName(String categoryName) { this.categoryName = categoryName; }
		public String getItemName() { return itemName; }
		public void setItemName(String itemName) { this.itemName = itemName; }
		public String getPrice() { return price; }
		public void setPrice(String price) { this.price = price; }
		public String getQuantity() { return quantity; }
		public void setQuantity(String 	quantity) { this.quantity = quantity; }
		public String getDescription() { return description; }
		public void setDescription(String description) { this.description = description; }
		public String getTitle() { return title; }
		public void setTitle(String title) { this.title = title; }
		public String getInStock () { return inStock; }
		public void setInStock(String inStock) { this.inStock = inStock; }
		public String getDiscountPrice () { return discountPrice; }
		public void setDiscountPrice(String discountPrice) { this.discountPrice = discountPrice; }
		public String getImage () { return image; }
		public void setImage(String image) { this.image = image; }
		
		
		
		
		public void setSearchValues() {
			searchableValue = skuId + "|" + categoryName + "|" + itemName + "|" + price + "|" + quantity + "|" + description + "|"+ title + "|" + inStock + "|" + discountPrice + "|" + image; 
		}
	}
