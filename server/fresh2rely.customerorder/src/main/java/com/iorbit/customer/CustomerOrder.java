package com.iorbit.customer;

import java.util.UUID;

public class CustomerOrder implements java.io.Serializable{
	private UUID coId;
	private String phoneNo;
	private String source;
	private String totalAmount;
	private String products;
	private String address;
	private String SearchableValue;
	
	public CustomerOrder(UUID coId,String phoneNo,String source,String totalAmount,String products,String address)
	{	this.coId=UUID.randomUUID();
		setPhoneNo(phoneNo);
		setSource(source);
		setTotalAmount(totalAmount);
		setProducts(products);
		setAddress(address);
	}

	public UUID getCoId() { return coId; }
	public void setCoId(UUID coId) { this.coId = coId; }
	public String getPhoneNo() { return phoneNo; }
	public void setPhoneNo(String phoneNo) { this.phoneNo = phoneNo; }
	public String getSource() { return source; }
	public void setSource(String source) { this.source = source; }
	public String getTotalAmount() { return totalAmount; }
	public void setTotalAmount(String totalAmount) { this.totalAmount = totalAmount; }
	public String getProducts() { return products; }
	public void setProducts(String products) { this.products = products; }
	public String getAddress() { return address; }
	public void setAddress(String address) { this.address = address; }
	
	public void setSearchValues() {
		SearchableValue = coId + "|" + phoneNo + "|" + address;
	}
}
