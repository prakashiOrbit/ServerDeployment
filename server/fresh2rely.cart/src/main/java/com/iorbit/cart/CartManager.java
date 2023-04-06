package com.iorbit.cart;

import java.util.List;

public class CartManager implements java.io.Serializable{

	public void createCart(CreateCart fc, Cart exist) {
		if (exist != null) {
			new MessageResponse("Cart with the skuId " + exist.getSkuId() + " already exists.");
			return;
		}
		Cart cart = new Cart(fc.getSkuId(), fc.getCartId(), fc.getPhoneNumber(), fc.getQuantity(), fc.getTotalPrice(),
				fc.getItemName(), fc.getImage(), fc.getDiscountPrice(), fc.getItemPrice());

		CartItem cartItem = new CartItem(cart, fc.getCartItemId());
		cart.addItem(cartItem);
		new MessageResponse("Cart Item is successfully inserted in cart with CartID : " + cartItem.getCartId()
				+ " and CartItemId " + cartItem.getCartItemId());

		cart.setSearchValues();
	}

	public void addToCart(AddToCart ac, Cart cart) {
//		cart.addItem(ac.getSkuId(), ac.getQuantity());
		
		cart.setSkuId(ac.getQuantity());
		new MessageResponse("Item is added to AddTOCart");
	}

	public void removeCartItem(RemoveCartItem removeItem, CartItem cartItem) {

		new MessageResponse("Cart Items has been removed.");
	}

	public void getCart(Cart cart) {
		CartDetails details = new CartDetails(cart);

	}


	public void setupCartSearch(SearchCart listcart) {
		listcart.setupSearch();
	}

	public void getCarts(SearchCart searchcart) {

		List cart = searchcart.getCart();

		CartList cartlist = new CartList(cart);
	}

	public void changeCartItemQuantity(ChangeCartItemQuantity c, CartItem cartItem) {
		cartItem.setQuantity(c.getQuantity());
	}

}