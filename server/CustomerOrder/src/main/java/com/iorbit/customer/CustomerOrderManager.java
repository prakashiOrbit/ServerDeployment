package com.iorbit.customer;

import java.util.List;

public class CustomerOrderManager {
	public void createCustomerOrder(CreateCustomerOrder cco, CustomerOrder exist)
	{
		if (!Validator.isValidContact(cco.getPhoneNo())) {
			new MessageResponse("Please enter Valid Phone Number");
			return;
		}
		if (!Validator.isValidSource(cco.getSource())) {
			new MessageResponse("Please enter Valid Source");
			return;	
		}
		if (!Validator.isValidAmount(cco.getTotalAmount())) {
			new MessageResponse("Amount should be in Decimal");
			return;
		}
		if (!Validator.isValidProduct(cco.getProducts())) {
			new MessageResponse("Please enter Correct Product");
			return;
		}
		if (!Validator.isValidAddress(cco.getAddress())) {
			new MessageResponse("Entered Address is not correct.Please enter a valid Address");
			return;	
		}
		
		CustomerOrder co = new CustomerOrder(cco.getCoId(),cco.getPhoneNo(),cco.getSource(),cco.getTotalAmount(),cco.getProducts(),cco.getAddress());
		co.setSearchValues();

		new MessageResponse("Customer Order created successfully");

	}
	
	public void getCustomerOrder(CustomerOrder co) {
		CustomerOrderDetails details = new CustomerOrderDetails(co);
	}

	// listing of farmer details
	public void setupCustomerOrderSearch(SearchCustomerOrder listcustomer) {
		listcustomer.setupSearch();
	}

	public void getCustomerOrders(SearchCustomerOrder searchcustomer) {
		List customerorders = searchcustomer.getCustomerOrder();
		CustomerOrderList td = new CustomerOrderList(customerorders);
	}

	// editing of farmer details
	public void editCustomerOrder(EditCustomerOrder edit, CustomerOrder co) {
		if (!Validator.isValidContact(edit.getPhoneNo())) {
			new MessageResponse("Please enter Valid Phone Number");
			return;
		}
		if (!Validator.isValidSource(edit.getSource())) {
			new MessageResponse("Please enter Valid Source");
			return;	
		}
		if (!Validator.isValidAmount(edit.getTotalAmount())) {
			new MessageResponse("Amount should be in Decimal");
			return;
		}
		if (!Validator.isValidProduct(edit.getProducts())) {
			new MessageResponse("Please enter Correct Product");
			return;
		}
		if (!Validator.isValidAddress(edit.getAddress())) {
			new MessageResponse("Entered Address is not correct.Please enter a valid Address");
			return;	
		}

		co.setPhoneNo(edit.getPhoneNo());
		co.setSource(edit.getSource());
		co.setTotalAmount(edit.getTotalAmount());
		co.setProducts(edit.getProducts());
		co.setAddress(edit.getAddress());
		
		new MessageResponse("CustomerOrder details has been updated.");
	}
	

}
