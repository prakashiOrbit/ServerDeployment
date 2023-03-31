package com.iorbit.cart;

import java.util.ArrayList;
import java.util.List;



public class CartList implements java.io.Serializable{
	class CartData implements java.io.Serializable{
		private String itemId;
		private String cartId;
		private int quantity;
		private String phoneNumber;
		
		
		CartData(Cart cart){
			itemId=cart.getItemId();
			cartId=cart.getCartId();
			phoneNumber=cart.getPhoneNumber();
			quantity=cart.getQuantity();
			
			
		}
	}
	
	private List<CartData> cart;
	
	public CartList(List listcart) {
		cart=new ArrayList<CartData>();
		System.out.println("Got items as: "+listcart);
		for(int i=0;i<listcart.size();i++) {
			CartData data=new CartData((Cart)listcart.get(i));
			cart.add(data);
		}
	}
}
