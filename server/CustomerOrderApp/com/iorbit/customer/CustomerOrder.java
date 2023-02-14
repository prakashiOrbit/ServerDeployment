package com.iorbit.customer;

import java.io.Serializable;

public class CustomerOrder implements Serializable {

	private String orderNo;
	private String customerName;
	private String orderValue;
	private String status;
	private String action;
	private String warehouse;
	private String searchableValue;

	public CustomerOrder(final String orderNo, final String customerName, final String orderValue, final String status,
			final String action, final String warehouse) {
		this.orderNo = orderNo;
		this.customerName = customerName;
		this.orderValue = orderValue;
		this.status = status;
		this.action = action;
		this.warehouse = warehouse;
	}

	public CustomerOrder(final String customerName, final String orderValue, final String status, final String action,
			final String warehouse) {
		this.customerName = customerName;
		this.orderValue = orderValue;
		this.status = status;
		this.action = action;
		this.warehouse = warehouse;
	}

	public CustomerOrder(final String searchable) {
	}

	public String getOrderNo() {
		return orderNo;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(final String customerName) {
		this.customerName = customerName;
	}

	public String getOrderValue() {
		return orderValue;
	}

	public void setOrderValue(final String orderValue) {
		this.orderValue = orderValue;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(final String status) {
		this.status = status;
	}

	public String getAction() {
		return action;
	}

	public void setAction(final String action) {
		this.action = action;
	}

	public String getWarehouse() {
		return warehouse;
	}

	public void setWarehouse(final String warehouse) {
		this.warehouse = warehouse;
	}

	public void setSearchValues() {
		this.searchableValue = String.valueOf(this.orderNo) + "|" + this.customerName + "|" + this.orderValue + "|"
				+ this.status + "|" + this.action + "|" + this.warehouse;
	}

}
