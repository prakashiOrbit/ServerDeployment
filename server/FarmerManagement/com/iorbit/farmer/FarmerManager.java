package com.iorbit.farmer;

import java.util.List;

public class FarmerManager {
	//Inserting the farmer data
	public void createFarmer(CreateFarmer fc, Farmer exist) {
		if (fc.getfId()==null)
		{
			new MessageResponse("Enter the proper ID");
			return;
		}
		if (!Validator.isValidName(fc.getName()))
		{
			new MessageResponse("Enter the proper Name");
			return;
		}
		if (!Validator.isValidContact(fc.getPhoneNo()))
		{
			new MessageResponse("Enter the proper contact Number");
			return;
		}
		if (!Validator.isValidCity(fc.getCity()))
		{
			new MessageResponse("Enter the proper City");
			return;
		}
		if (!Validator.isValidState(fc.getState()))
		{
			new MessageResponse("Enter the proper State");
			return;
		}
		if (!Validator.isValidPinCode(fc.getPinCode()))
		{
			new MessageResponse("Enter the proper Pincode");
			return;
		}
		if (!Validator.isValidAadharNum(fc.getAadharNo()))
		{
			new MessageResponse("Enter the proper aadhar number");
			return;
		}
		if (!Validator.isValidPan(fc.getPanNo()))
		{
			new MessageResponse("Enter the proper PAN number");
			return;
		}
		if (!Validator.isValidAccount(fc.getAccountNo()))
		{
			new MessageResponse("Enter the proper Account number");
			return;
		}
		if (!Validator.isValidIfsc(fc.getIfscCode()))
		{
			new MessageResponse("Enter the proper IFSC Code");
			return;
		}
		
		if (exist != null){
			new MessageResponse("Farmer with the name "+exist.getName() +" Already exists.");
			return;
		}
		Farmer f = new Farmer(fc.getfId(),fc.getName(),fc.getPhoneNo(),fc.getStreetAddress(),fc.getCity(),fc.getState(),fc.getPinCode(),fc.getAadharNo(),fc.getPanNo(),fc.getPayeeName(),fc.getAccountNo(),fc.getIfscCode());
		f.setSearchValues();
		new MessageResponse("Farmer is successfully onboarded.");
	}
	
	//getting the farmer details 
	public void getFarmer(Farmer farmer) {
		FarmerDetails details = new FarmerDetails(farmer);
	}
	
	//listing of farmer details
	public void setupFarmersSearch(SearchFarmers listfarmer) {
        listfarmer.setupSearch();
    }
	
	public void getFarmers(SearchFarmers searchfarmer){
	        List farmers = searchfarmer.getFarmer();
	        FarmerList td = new FarmerList(farmers);
	}
	
	//editing of farmer details
	public void editFarmer(EditFarmer edit,Farmer farmer) {
		if (edit.getfId()==null)
		{
			new MessageResponse("Enter the proper ID");
			return;
		}
		if (!Validator.isValidContact(edit.getPhoneNo()))
		{
			new MessageResponse("Enter the proper contact Number");
			return;
		}
		if (!Validator.isValidCity(edit.getCity()))
		{
			new MessageResponse("Enter the proper City");
			return;
		}
		if (!Validator.isValidState(edit.getState()))
		{
			new MessageResponse("Enter the proper State");
			return;
		}
		if (!Validator.isValidPinCode(edit.getPinCode()))
		{
			new MessageResponse("Enter the proper Pincode");
			return;
		}
		if (!Validator.isValidAadharNum(edit.getAadharNo()))
		{
			new MessageResponse("Enter the proper aadhar number");
			return;
		}
		if (!Validator.isValidPan(edit.getPanNo()))
		{
			new MessageResponse("Enter the proper PAN number");
			return;
		}
		if (!Validator.isValidAccount(edit.getAccountNo()))
		{
			new MessageResponse("Enter the proper Account number");
			return;
		}
		if (!Validator.isValidIfsc(edit.getIfscCode()))
		{
			new MessageResponse("Enter the proper IFSC Code");
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
		farmer.setSearchValues();
		new MessageResponse("Farmer details has been updated.");
	}
}