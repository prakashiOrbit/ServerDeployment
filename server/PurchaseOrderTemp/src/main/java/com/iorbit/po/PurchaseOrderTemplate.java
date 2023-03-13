package com.iorbit.po;

public class PurchaseOrderTemplate implements java.io.Serializable {

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

	private String searchableValue;

	public PurchaseOrderTemplate(final String poId, final String date, final String shipToStreet,
			final String shipToCity, final String shipToState, final String shipToPinCode, final String billToStreet,
			final String billToCity, final String billToState, final String billToPinCode) {

		this.poId = poId;
		this.date = date;
		this.shipToStreet = shipToStreet;
		this.shipToCity = shipToCity;
		this.shipToState = shipToState;
		this.shipToPinCode = shipToPinCode;
		this.billToStreet = billToStreet;
		this.billToCity = billToCity;
		this.billToState = billToState;
		this.billToPinCode = billToPinCode;

	}

	public String getPoId() {
		return poId;
	}

	public String getDate() {
		return date;
	}

	public void setDate(final String date) {
		this.date = date;
	}

	public String getShipToStreet() {
		return shipToStreet;
	}

	public void setShipToStreet(final String shipToStreet) {
		this.shipToStreet = shipToStreet;
	}

	public String getShipToCity() {
		return shipToCity;
	}

	public void setShipToCity(final String shipToCity) {
		this.shipToCity = shipToCity;
	}

	public String getShipToState() {
		return shipToState;
	}

	public void setShipToState(final String shipToState) {
		this.shipToState = shipToState;
	}

	public String getShipToPinCode() {
		return shipToPinCode;
	}

	public void setShipToPinCode(final String shipToPinCode) {
		this.shipToPinCode = shipToPinCode;
	}

	public String getBillToStreet() {
		return billToStreet;
	}

	public void setBillToStreet(final String billToStreet) {
		this.billToStreet = billToStreet;
	}

	public String getBillToCity() {
		return billToCity;
	}

	public void setBillToCity(final String billToCity) {
		this.billToCity = billToCity;
	}

	public String getBillToState() {
		return billToState;
	}

	public void setBillToState(final String billToState) {
		this.billToState = billToState;
	}

	public String getBillToPinCode() {
		return billToPinCode;
	}

	public void setBillToPinCode(final String billToPinCode) {
		this.billToPinCode = billToPinCode;
	}

	public void setSearchValues() {
		this.searchableValue = String.valueOf(this.poId) + "|" + this.shipToStreet + "|" + this.shipToCity + "|"
				+ this.shipToState + "|" + this.shipToPinCode + "|" + this.billToStreet + "|" + this.billToCity + "|"
				+ this.billToState + "|" + this.billToPinCode;
	}

}
