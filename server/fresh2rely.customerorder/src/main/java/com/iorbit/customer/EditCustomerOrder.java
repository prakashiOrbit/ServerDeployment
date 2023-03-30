package com.iorbit.customer;

import java.util.UUID;

public class EditCustomerOrder implements java.io.Serializable {
	private String coId;
	private String phoneNo;
	private String source;
	private String totalAmount;
	private String products;
	private String address;

	public EditCustomerOrder(CustomerOrder co) {
		phoneNo = co.getPhoneNo();
		source = co.getSource();
		totalAmount = co.getTotalAmount();
		products = co.getProducts();
		address = co.getAddress();
	}
	
	public String getPhoneNo() { return phoneNo; }
	public String getSource() { return source; }
	public String getTotalAmount() { return totalAmount; }
	public String getProducts() { return products; }
	public String getAddress() { return address; }
}
