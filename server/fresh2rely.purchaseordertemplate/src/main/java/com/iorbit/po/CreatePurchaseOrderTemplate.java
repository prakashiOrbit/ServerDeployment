package com.iorbit.po;

public class CreatePurchaseOrderTemplate implements java.io.Serializable {

	private String poId;
	private String date;
	private String shipToStreet;
	private String shipToCity;
	private String shipToState;
	private String shipToPinCode;
	private String billToStreet;
	private String billToCity;
	private String billToState;
	private String billToPinCode;

	public String getPoId() {
		return poId;
	}

	public String getDate() {
		return date;
	}

	public String getShipToStreet() {
		return shipToStreet;
	}

	public String getShipToCity() {
		return shipToCity;
	}

	public String getShipToState() {
		return shipToState;
	}

	public String getShipToPinCode() {
		return shipToPinCode;
	}

	public String getBillToStreet() {
		return billToStreet;
	}

	public String getBillToCity() {
		return billToCity;
	}

	public String getBillToState() {
		return billToState;
	}

	public String getBillToPinCode() {
		return billToPinCode;
	}

}
