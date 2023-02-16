package com.iorbit.customer;

import java.io.Serializable;

public class CustomerDetails implements Serializable {

	private String orderNo;
	private String customerName;
	private String orderValue;
	private String status;
	private String action;
	private String warehouse;

	public CustomerDetails(final CustomerOrder customer) {
		
		this.orderNo = customer.getOrderNo();
		this.customerName = customer.getCustomerName();
		this.orderValue = customer.getOrderValue();
		this.status = customer.getStatus();
		this.action = customer.getAction();
		this.warehouse = customer.getWarehouse();
	}

	public String getOrderNo() {
		return orderNo;
	}

	public String getCustomerName() {
		return customerName;
	}

	public String getOrderValue() {
		return orderValue;
	}

	public String getStatus() {
		return status;
	}

	public String getAction() {
		return action;
	}

	public String getWarehouse() {
		return warehouse;
	}

}
