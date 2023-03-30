package com.iorbit.cart;

public class Cart implements java.io.Serializable {

	private String itemId;
	private String cartId;
	private int quantity;
	private String phoneNumber;
	
	private String searchableValue;

	public Cart(String itemId,String cartId,int quantity,String phoneNumber) {

		this.itemId= itemId;
		this.cartId=cartId;
		this.quantity=quantity;
		this.phoneNumber=phoneNumber;
	
	}
	
	 public void increaseQuantity(int amount) {
	        this.quantity += amount;
	    }

	    public void decreaseQuantity(int amount) throws Exception {
	        if (this.quantity < amount) {
	            throw new Exception("Not enough quantity to decrease");
	        } else {
	            this.quantity -= amount;
	        }
	    }
	
	
	
	
	
	
	public Cart(String itemId, int quantity ,String phoneNumber) {

		
		this.itemId = itemId;
		this.quantity = quantity;
		this.phoneNumber = phoneNumber;
		
	}
	
	public Cart(String searchable) {

	}
	
	public String getCartId() { return cartId; }
	public String getItemId() { return itemId; }
	public void setItemId(String itemId) { this.itemId = itemId; }
	public int getQuantity() { return quantity; }
	public void setQuantity(int quantity) { this.quantity = quantity; }
	public String getPhoneNumber() { return phoneNumber; }
	public void setPhoneNumber(String price) { this.phoneNumber = phoneNumber; }
	
	
	public void setSearchValues() {
		searchableValue = cartId + "|" + itemId + "|" + quantity + "|" + phoneNumber ; 
	}
}
