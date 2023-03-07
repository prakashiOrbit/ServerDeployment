package com.iorbit.po;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

class PoData implements Serializable {
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

	PoData(final PurchaseOrderTemplate po) {
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
}

public class PurchaseOrderTemplateList implements java.io.Serializable {
	private List<PoData> POS;

	public PurchaseOrderTemplateList(final List listpo) {

		this.POS = new ArrayList<PoData>();
		System.out.println("Got POs as: " + listpo);
		for (int i = 0; i < listpo.size(); ++i) {
			final PoData data = new PoData((PurchaseOrderTemplate) listpo.get(i));
			this.POS.add(data);
		}
	}

}
