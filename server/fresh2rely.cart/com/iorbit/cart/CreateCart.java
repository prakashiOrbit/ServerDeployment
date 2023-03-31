package com.iorbit.cart;

public class CreateCart implements java.io.Serializable {
	public CreateCart() {

	}
	
	private String itemId;
	private String cartId;
	private int quantity;
	private String phoneNumber;
	
	public String getItemId() { return itemId; }
	public String getCartId() { return cartId; }
	public int getQuantity() { return quantity; }
	public String getPhoneNumber() { return phoneNumber; }
	
}
