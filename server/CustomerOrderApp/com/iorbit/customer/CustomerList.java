package com.iorbit.customer;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class CustomerList implements Serializable {
	private List<CustomerData> customers;

	public CustomerList(final List listcustomer) {
		this.customers = new ArrayList<CustomerData>();
		System.out.println("Got Customers as: " + listcustomer);
		for (int i = 0; i < listcustomer.size(); ++i) {
			final CustomerData data = new CustomerData((CustomerOrder) listcustomer.get(i));
			this.customers.add(data);
		}
	}

	class CustomerData implements Serializable {
		private String orderNo;
		private String customerName;
		private String orderValue;
		private String status;
		private String action;
		private String warehouse;

		CustomerData(final CustomerOrder customer) {
			this.orderNo = customer.getOrderNo();
			this.customerName = customer.getCustomerName();
			this.orderValue = customer.getOrderValue();
			this.status = customer.getStatus();
			this.action = customer.getAction();
			this.warehouse = customer.getWarehouse();
		}

	}

}
