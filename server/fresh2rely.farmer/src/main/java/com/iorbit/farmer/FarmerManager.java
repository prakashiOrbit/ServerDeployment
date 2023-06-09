package com.iorbit.farmer;

import java.util.List;

public class FarmerManager {
	// Inserting the farmer data
	public void createFarmer(CreateFarmer fc, Farmer exist)
	{
		if (!Validator.isValidName(fc.getName())) {
			new MessageResponse("Invalid user name.Only letters and spaces are allowed");
			return;
		}
		if (!Validator.isValidContact(fc.getPhoneNo())) {
			new MessageResponse("Please enter Valid Phone Number");
			return;	
		}
		if (!Validator.isValidAadharNum(fc.getAadharNo())) {
			new MessageResponse("Please enter 12 Digit Aadhar ID");
			return;
		}
		if (!Validator.isValidPan(fc.getPanNo())) {
			new MessageResponse("Please enter valid Pan card Number");
			return;
		}
		if (!Validator.isValidStreet(fc.getStreetAddress())) {
			new MessageResponse("Enter valid Street Address");
			return;
		}
		if (!Validator.isValidCity(fc.getCity())) {
			new MessageResponse("Entered City is not valid.Please enter Valid City");
			return;	
		}
		if (!Validator.isValidState(fc.getState())) {
			new MessageResponse("Entered State is not valid.Please enter Valid State");
			return;
		}
		if (!Validator.isValidPinCode(fc.getPinCode())) {
			new MessageResponse("Entered Pincode is not valid.Please enter Valid Pincode");
			return;
		}
		if (!Validator.isValidPayeeName(fc.getPayeeName())) {
			new MessageResponse("Invalid Payee Name.Only letters and spaces are allowed");
			return;
		}
		if (!Validator.isValidAccount(fc.getAccountNo())) {
			new MessageResponse("Account Number must be at least 9 Numbers and It cannot be Empty");
			return;
		}
		if (!Validator.isValidIfsc(fc.getIfscCode())) {
			new MessageResponse("Entered IFSC Code is not valid.Please enter Valid IFSC Code");
			return;
		}
		Farmer f = new Farmer(fc.getFId(),fc.getFarmerId(), fc.getName(), fc.getPhoneNo(), fc.getStreetAddress(), fc.getCity(),
				fc.getState(), fc.getPinCode(), fc.getAadharNo(), fc.getPanNo(), fc.getPayeeName(), fc.getAccountNo(),
				fc.getIfscCode(),fc.getCenterId(),fc.geteCenterName());
		f.setSearchValues();

		new MessageResponse("Farmer is successfully onboarded.");

	}

	// getting the farmer details
	public void getFarmer(Farmer farmer) {
		FarmerDetails details = new FarmerDetails(farmer);
	}

	// listing of farmer details
	public void setupFarmersSearch(SearchFarmers listfarmer) {
		listfarmer.setupSearch();
	}

	public void getFarmers(SearchFarmers searchfarmer) {
		List farmers = searchfarmer.getFarmer();
		FarmerList td = new FarmerList(farmers);
	}

	// editing of farmer details
	public void editFarmer(EditFarmer edit, Farmer farmer) {
		if (!Validator.isValidName(edit.getName())) {
			new MessageResponse("Invalid user name.Only letters and spaces are allowed");
			return;
		}
		if (!Validator.isValidContact(edit.getPhoneNo())) {
			new MessageResponse("Please enter Valid Phone Number");
			return;	
		}
		if (!Validator.isValidAadharNum(edit.getAadharNo())) {
			new MessageResponse("Please enter 12 Digit Aadhar ID");
			return;
		}
		if (!Validator.isValidPan(edit.getPanNo())) {
			new MessageResponse("Please enter valid Pan card Number");
			return;
		}
		if (!Validator.isValidStreet(edit.getStreetAddress())) {
			new MessageResponse("Enter valid Street Address");
			return;
		}
		if (!Validator.isValidCity(edit.getCity())) {
			new MessageResponse("Entered City is not valid.Please enter Valid City");
			return;	
		}
		if (!Validator.isValidState(edit.getState())) {
			new MessageResponse("Entered State is not valid.Please enter Valid State");
			return;
		}
		if (!Validator.isValidPinCode(edit.getPinCode())) {
			new MessageResponse("Entered Pincode is not valid.Please enter Valid Pincode");
			return;
		}
		if (!Validator.isValidPayeeName(edit.getPayeeName())) {
			new MessageResponse("Invalid Payee Name.Only letters and spaces are allowed");
			return;
		}
		if (!Validator.isValidAccount(edit.getAccountNo())) {
			new MessageResponse("Account Number must be at least 9 Numbers and It cannot be Empty");
			return;
		}
		if (!Validator.isValidIfsc(edit.getIfscCode())) {
			new MessageResponse("Entered IFSC Code is not valid.Please enter Valid IFSC Code");
			return;
		}

		farmer.setName(edit.getName());
		farmer.setPhoneNo(edit.getPhoneNo());
		farmer.setStreetAddress(edit.getStreetAddress());
		farmer.setCity(edit.getCity());
		farmer.setState(edit.getState());
		farmer.setPinCode(edit.getPinCode());
		farmer.setAadharNo(edit.getAadharNo());
		farmer.setPanNo(edit.getPanNo());
		farmer.setPayeeName(edit.getPayeeName());
		farmer.setAccountNo(edit.getAccountNo());
		farmer.setIfscCode(edit.getIfscCode());
		farmer.setCenterId(edit.getCenterId());
		farmer.setCenterName(edit.geteCenterName());
		farmer.setSearchValues();
		new MessageResponse("Farmer details has been updated.");
	}
}