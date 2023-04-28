package com.iorbit.customer;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class CustomerOrderList implements java.io.Serializable {
	class CustomerOrderData implements java.io.Serializable {
		private UUID coId;
		private String phoneNo;
		private String source;
		private String totalAmount;
		private String products;
		private String address;

		CustomerOrderData(CustomerOrder customer) {
			coId = customer.getCoId();
			phoneNo = customer.getPhoneNo();
			source = customer.getSource();
			totalAmount = customer.getTotalAmount();
			products = customer.getProducts();
			address = customer.getAddress();
		}
	}

	private List<CustomerOrderData> farmers;

	public CustomerOrderList(List listcustomerorder) {
		farmers = new ArrayList<CustomerOrderData>();
		System.out.println("Fetching customer orders as: " + listcustomerorder);
		for (int i = 0; i < listcustomerorder.size(); i++) {
			CustomerOrderData data = new CustomerOrderData((CustomerOrder) listcustomerorder.get(i));
			farmers.add(data);
		}
	}
}
