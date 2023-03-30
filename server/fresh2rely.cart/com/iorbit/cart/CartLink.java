package com.iorbit.cart;

public class CartLink implements java.io.Serializable{
	private String cartId;
	private String itemId;
	
    	
	CartLink(String cartId)
	{
		setCartId(cartId);
	}
	
	public String getCartId() { return cartId; }
	public void setCartId(String cartId) { this.cartId = cartId; }
	public String getItemId() { return itemId; }
	public void setItemId(String itemId) { this.itemId = itemId; }
	
}