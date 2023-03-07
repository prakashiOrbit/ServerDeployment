package com.iorbit.po;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.constraints.NotNull;

public class SearchPurchaseOrders implements java.io.Serializable {
	private List po;
	private Map search;

	@NotNull
	private String searchString;

	void setupSearch() {
		if (this.searchString == null) {
			new MessageResponse("search String cannot be null");
			return;
		}
		(this.search = new HashMap()).put("searchableValue", "*|" + this.searchString + "|*");
		this.po = new ArrayList<PurchaseOrder>();
	}

	public List getPo() {
	    Validator validator = Validation.buildDefaultValidatorFactory().getValidator();
	    Set<ConstraintViolation<SearchPurchaseOrders>> violations = validator.validate(this);
	    
	    if (!violations.isEmpty()) {
	    	new MessageResponse("Po field should not be null");
	    	
	    }
	    
	    return this.po;
	  }

}
