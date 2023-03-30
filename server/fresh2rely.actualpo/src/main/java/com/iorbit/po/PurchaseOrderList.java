package com.iorbit.po;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class PurchaseOrderList implements java.io.Serializable {
	private List<PoData> pos;

	public PurchaseOrderList(final List listpo) {
		this.pos = new ArrayList<PoData>();
		System.out.println("Got POs as: " + listpo);
		for (int i = 0; i < listpo.size(); ++i) {
			final PoData data = new PoData(listpo.get(i));
			this.pos.add(data);
		}
	}

	class PoData implements Serializable {
		private String PoId;
		private String FarmerName;
		private String CollectionCenterName;
		private String Produce;
		private String Quantity;
		private String PickupDate;

		PoData(final PurchaseOrder po) {
			this.PoId = po.getPoId();
			this.FarmerName = po.getFarmerName();
			this.CollectionCenterName = po.getCollectionCenterName();
			this.Produce = po.getProduce();
			this.Quantity = po.getQuantity();
			this.PickupDate = po.getPickupDate();
		}

		public PoData(Object object) {
			// TODO Auto-generated constructor stub
		}
	}
}
