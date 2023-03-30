package com.iorbit.cart;



public class CartDetails implements java.io.Serializable{
	private String itemId;
	private String cartId;
	private int quantity;
	private String phoneNumber;

	
	public CartDetails(Cart cart) {
		itemId = cart.getItemId();
		cartId=cart.getCartId();
		quantity=cart.getQuantity();
		phoneNumber=cart.getPhoneNumber();
		

	}

	public String getItemId() { return itemId; }
	public String getCartId() { return cartId; }
	public int getQuantity() { return quantity; }
	public String getPhoneNumber() { return phoneNumber; }
	

}