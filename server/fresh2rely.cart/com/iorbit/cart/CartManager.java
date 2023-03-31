package com.iorbit.cart;

import java.util.List;


public class CartManager {

	//inserting the deals data
			public void createCart(CreateCart pc,Cart exist) {
				if (exist !=null) {
					
					        exist.increaseQuantity(pc.getQuantity());
					        new MessageResponse("Item with the ID " + exist.getItemId() + " already exists. Quantity increased to " + exist.getQuantity());
					    } else {
					        Cart p = new Cart(pc.getItemId(), pc.getCartId(), pc.getQuantity(), pc.getPhoneNumber());
					        
					        p.setSearchValues();
					        new MessageResponse("Item added to cart successfully");
					    
					    }}
				
				
	public void removeFromCart(Cart cart, int amount) throws Exception {
			    cart.decreaseQuantity(amount);
			    new MessageResponse("Item removed from cart successfully. New quantity: " + cart.getQuantity());
			}
	        
			//getting the item details 
			public void getCart(Cart cart) {
				CartDetails details = new CartDetails(cart);
				
			}
			
			
			
			
			//listing of items details
			public void setupCartSearch(SearchCart listcart) {
				listcart.setupSearch();
		    }
			
			public void getcart(SearchCart searchcart){
			        List cart = searchcart.getCart();
			        CartList td = new CartList(cart);
			}
			
			//editing of cart details
			public void editCart(EditCart edit,Cart cart) {
				cart.setItemId(edit.getItemId());
				cart.setQuantity(edit.getQuantity());
				cart.setPhoneNumber(edit.getPhoneNumber());
				
				
				cart.setSearchValues();
				new MessageResponse("Items details has been updated.");
			}
		}



