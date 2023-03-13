package com.iorbit.po;

public class PurchaseOrderTemplateDetails implements java.io.Serializable {

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

	public PurchaseOrderTemplateDetails(final PurchaseOrderTemplate po) {
		this.poId = po.getPoId();
		this.date = po.getDate();
		this.shipToStreet = po.getShipToStreet();
		this.shipToCity = po.getShipToCity();
		this.shipToState = po.getShipToState();
		this.shipToPinCode = po.getShipToPinCode();
		this.billToStreet = po.getBillToStreet();
		this.billToCity = po.getBillToCity();
		this.billToState = po.getBillToState();
		this.billToPinCode = po.getBillToPinCode();

	}

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
