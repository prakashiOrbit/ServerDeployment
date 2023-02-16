package com.iorbit.customer;

import java.io.Serializable;

public class CustomerCart implements Serializable {

	private String itemName;
	private String quantity;
	private String unitPrice;
	private String totalPriceWithGST;

	public CustomerCart(final String itemName, final String quantity, final String unitPrice,
			final String totalPriceWithGST) {
		this.itemName = itemName;
		this.quantity = quantity;
		this.unitPrice = unitPrice;
		this.totalPriceWithGST = totalPriceWithGST;
	}

	public CustomerCart(final String quantity, final String unitPrice, final String totalPriceWithGST) {
		this.quantity = quantity;
		this.unitPrice = unitPrice;
		this.totalPriceWithGST = totalPriceWithGST;
	}

	public String getItemName() {
		return itemName;
	}

	public String getQuantity() {
		return quantity;
	}

	public void setQuantity(final String quantity) {
		this.quantity = quantity;
	}

	public String getUnitPrice() {
		return unitPrice;
	}

	public void setUnitPrice(final String unitPrice) {
		this.unitPrice = unitPrice;
	}

	public String getTotalPriceWithGST() {
		return totalPriceWithGST;
	}

	public void setTotalPriceWithGST(final String totalPriceWithGST) {
		this.totalPriceWithGST = totalPriceWithGST;
	}

}
