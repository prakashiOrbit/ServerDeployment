package com.iorbit.customer;

import java.util.UUID;

public class CustomerOrderDetails implements java.io.Serializable {
	private UUID coId;
	private String phoneNo;
	private String source;
	private String totalAmount;
	private String products;
	private String address;

	public CustomerOrderDetails(CustomerOrder customer) {
		coId = customer.getCoId();
		phoneNo = customer.getPhoneNo();
		source = customer.getSource();
		totalAmount = customer.getTotalAmount();
		products = customer.getProducts();
		address = customer.getAddress();
	}
	
	public UUID getUuid() { return coId; }
	public String getPhoneNo() { return phoneNo; }
	public String getSource() { return source; }
	public String getTotalAmount() { return totalAmount; }
	public String getProducts() { return products; }
	public String getAddress() { return address; }
}
