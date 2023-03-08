package com.iorbit.item;

import java.util.List;




public class ItemManager {

	        
	      
	        
	   
		//Inserting the farmer data
		public void createItem(CreateItem fc, Item exist) {
			if (exist != null){
				new MessageResponse("Item with the name "+exist.getSKUID() +" Already exists.");
				return;
			}
			Item f = new Item(fc.getSKUID(),fc.getCategoryName(),fc.getItemName(),fc.getPrice(),fc.getQuantity(),fc.getDescription(),fc.getTitle(),fc.getInStock(),fc.getDiscountPrice(),fc.getImage());
			f.setSearchValues();
			new MessageResponse("Item is successfully onboarded.");
		}
		
	
		
		
	
	        
			//getting the item details 
		
			public void getItem(Item item) {
				ItemDetails details = new ItemDetails(item);
				
			}
			
			public void getCategory(Item item) {
				ItemDetails details = new ItemDetails(item);
				
			}
			
			
			
			
			//listing of items details
			public void setupItemSearch(SearchItem listitem) {
		        listitem.setupSearch();
		    }
			
			public void getitems(SearchItem searchitem){
			        List item = searchitem.getItem();
			        ItemList td = new ItemList(item);
			}
			
					
					
					
					
					
			//editing of farmer details
			public void editItem(EditItem edit,Item item) {
				item.setItemName(edit.getItemName());
				item.setPrice(edit.getPrice());
				item.setQuantity(edit.getQuantity());	
				item.setCategoryName(edit.getCategoryName());			
				item.setDescription(edit.getDescription());
				item.setTitle(edit.getTitle());
				item.setInStock(edit.getInStock());
				item.setDiscountPrice(edit.getDiscountPrice());
				item.setImage(edit.getImage());
				item.setSearchValues();
				
				
				new MessageResponse("Item details has been updated.");
			}
			
		}



