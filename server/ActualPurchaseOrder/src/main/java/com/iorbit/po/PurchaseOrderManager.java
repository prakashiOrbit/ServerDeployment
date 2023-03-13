package com.iorbit.po;

import java.util.List;

public class PurchaseOrderManager implements java.io.Serializable {
	public void createPo(final CreatePurchaseOrder createpo, final PurchaseOrder exist) {
		if (createpo.getPoId() == null || createpo.getPoId().trim().length() == 0) {
			new MessageResponse("PO id cannot be empty.");
			return;
		}
		if (createpo.getFarmerName() == null || createpo.getFarmerName().trim().length() == 0) {
			new MessageResponse("Farmer name cannot be empty.");
			return;
		}
		if (createpo.getCollectionCenterName() == null || createpo.getCollectionCenterName().trim().length() == 0) {
			new MessageResponse("Collection center name cannot be empty.");
			return;
		}
		if (createpo.getProduce() == null || createpo.getProduce().trim().length() == 0) {
			new MessageResponse("Produce cannot be empty.");
			return;

		}
		if (createpo.getQuantity() == null || createpo.getQuantity().trim().length() == 0) {
			new MessageResponse("Quantity cannot be empty.");
			return;

		}
		if (createpo.getPickupDate() == null || createpo.getPickupDate().trim().length() == 0) {
			new MessageResponse("Pickup date cannot be empty.");
			return;

		}

		if (exist != null) {
			new MessageResponse("PO with the id " + exist.getPoId() + " Already exists.");
			return;
		}
		final PurchaseOrder po = new PurchaseOrder(createpo.getPoId(), createpo.getFarmerName(), createpo.getProduce(),
				createpo.getQuantity(), createpo.getPickupDate(), createpo.getCollectionCenterName());
		po.setSearchValues();
		new MessageResponse("PO is successfully created.");
	}

	public void getPo(final PurchaseOrder po) throws Exception {
		if (po.getPoId() == null || po.getPoId().trim().length() == 0) {
			throw new Exception("PO id cannot be empty.");

		}

		final PurchaseOrderDetails details = new PurchaseOrderDetails(po);
	}

	public void setupPosSearch(final SearchPurchaseOrders listpo) {
		if (listpo == null) {
			new MessageResponse("No PO records found.");
			return;

		}
		listpo.setupSearch();
	}

	public void getPos(final SearchPurchaseOrders searchpo) {
		if (searchpo == null) {
			new MessageResponse("Search Po object is null.");
			return;

		}
		final List pos = searchpo.getPo();
		if (pos == null || pos.isEmpty()) {
			new MessageResponse("No PO(s) found for the given search criteria.");
			return;

		}
		final PurchaseOrderList polist = new PurchaseOrderList(pos);
	}

	public void editPo(final EditPurchaseOrder edit, final PurchaseOrder po) {
		if (po == null) {
			throw new IllegalArgumentException("PO ID cannot be null or empty");

		}

		if (edit.getFarmerName() == null || edit.getFarmerName().trim().length() == 0) {
			throw new IllegalArgumentException("Farmer Name cannot be empty or null.");

		}

		if (edit.getCollectionCenterName() == null || edit.getCollectionCenterName().trim().length() == 0) {
			throw new IllegalArgumentException("Collection center name cannot be empty or null.");

		}

		if (edit.getPickupDate() == null) {
			throw new IllegalArgumentException("Pickup Date cannot be empty or null.");

		}

		if (edit.getProduce() == null || edit.getProduce().trim().length() == 0) {
			throw new IllegalArgumentException("Produce Detail cannot be empty or null.");

		}

		if (edit.getQuantity() == null || edit.getQuantity().trim().length() == 0) {
			throw new IllegalArgumentException("Quantity cannot be empty or null.");

		}

		po.setFarmerName(edit.getFarmerName());
		po.setCollectionCenterName(edit.getCollectionCenterName());
		po.setPickupDate(edit.getPickupDate());
		po.setProduce(edit.getProduce());
		po.setQuantity(edit.getQuantity());
		po.setSearchValues();
		new MessageResponse("PO details has been updated.");
	}
}