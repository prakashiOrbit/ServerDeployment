package com.iorbit.customer;

import java.io.Serializable;
import java.util.List;

public class CustomerManager implements Serializable {

	public void viewCustomer(final CustomerOrder customer) {
		final CustomerDetails details = new CustomerDetails(customer);
	}

	public void setupCustomerSearch(final SearchCustomer listcustomer) {
		listcustomer.setupSearch();
	}

	public void viewCustomers(final SearchCustomer searchcustomer) {
		final List customers = searchcustomer.viewCustomer();
		final CustomerList list = new CustomerList(customers);
	}

}
