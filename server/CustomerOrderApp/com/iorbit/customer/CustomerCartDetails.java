package com.iorbit.customer;

import java.io.Serializable;

public class CustomerCartDetails implements Serializable {

	private String itemName;
	private String quantity;
	private String unitPrice;
	private String totalPriceWithGST;

	public CustomerCartDetails(final CustomerCart customer) {

		this.itemName = customer.getItemName();
		this.quantity = customer.getQuantity();
		this.unitPrice = customer.getUnitPrice();
		this.totalPriceWithGST = customer.getTotalPriceWithGST();
	}

	public String getItemName() { 
		return itemName;
	}

	public String getQuantity() {
		return quantity;
	}

	public String getUnitPrice() {
		return unitPrice;
	}

	public String getTotalPriceWithGST() {
		return totalPriceWithGST;
	}
}
