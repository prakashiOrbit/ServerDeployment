package com.iorbit.cart;

import java.util.List;

public class ItemManager {

	// Inserting the item data
	public void createItem(CreateItem fc, Item exist) {
		
		if (!Validator.isValidCategoryName(fc.getCategoryName())) {
			new MessageResponse("Invalid  name.Only letters and spaces are allowed");
			return;
		}
		if (!Validator.isValidItemName(fc.getItemName())) {
			new MessageResponse("Invalid  name.Only letters and spaces are allowed");
			return;
		}
		if (!Validator.isValidPrice(fc.getPrice())) {
			new MessageResponse("Entered price is not valid.Please enter Valid Price");
			return;
		}
		if (!Validator.isValidInstock(fc.getInStock())) {
			new MessageResponse("Please enter the number");
			return;
		}
		if (!Validator.isValidDiscountPrice(fc.getDiscountPrice())) {
			new MessageResponse("Please enter the number");
			return;

		}

		if (exist != null) {
			new MessageResponse("Item with the skuId " + exist.getSkuId() + " Already exists.");
			return;
		}
		
		Item item1 = new Item(fc.getSkuId(),fc.getCategoryName(),fc.getItemName(),fc.getPrice(),fc.getQuantity(),
				fc.getDescription(),fc.getTitle(),fc.getInStock(),fc.getDiscountPrice(),fc.getImage());

		new MessageResponse("Item is successfully created.");
	}

	// getting the item details

	public void getItem(Item item) {
		ItemDetails details = new ItemDetails(item);

	}

	public void getCategory(Item item) {
		ItemDetails details = new ItemDetails(item);

	}

	// listing of items details
	public void setupItemSearch(SearchItem listitem) {
		listitem.setupSearch();
	}

	public void getitems(SearchItem searchitem) {
		List item = searchitem.getItem();
		ItemList td = new ItemList(item);
	}

	// editing of item details
	public void editItem(EditItem edit, Item item) {

		if (!Validator.isValidCategoryName(edit.getCategoryName())) {
			new MessageResponse("Invalid  name.Only letters and spaces are allowed");
			return;
		}
		if (!Validator.isValidItemName(edit.getItemName())) {
			new MessageResponse("Invalid  name.Only letters and spaces are allowed");
			return;
		}
		if (!Validator.isValidPrice(edit.getPrice())) {
			new MessageResponse("Entered price is not valid.Please enter Valid Price");
			return;
		}
		if (!Validator.isValidQuantity(edit.getQuantity())) {
			new MessageResponse("Please enter the number");
			return;
		}
		if (!Validator.isValidInstock(edit.getInStock())) {
			new MessageResponse("Please enter the number");
			return;
		}
		if (!Validator.isValidDiscountPrice(edit.getDiscountPrice())) {
			new MessageResponse("Please enter the number");
			return;

		}

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
