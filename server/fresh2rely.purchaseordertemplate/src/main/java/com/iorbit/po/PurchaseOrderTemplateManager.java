package com.iorbit.po;

import java.util.List;

public class PurchaseOrderTemplateManager implements java.io.Serializable {
	public void createPo(final CreatePurchaseOrderTemplate createpo, final PurchaseOrderTemplate exist) {
		if (createpo.getPoId() == null || createpo.getPoId().trim().length() == 0) {
			new MessageResponse("PO id cannot be empty.");
			return;
		}
		if (createpo.getDate() == null || createpo.getDate().trim().length() == 0) {
			new MessageResponse("Date cannot be empty.");
			return;
		}
		if (createpo.getShipToStreet() == null || createpo.getShipToStreet().trim().length() == 0) {
			new MessageResponse("Street Shipping Address cannot be empty.");
			return;
		}
		if (!Validator.validateStringInput(createpo.getShipToCity())) {
			new MessageResponse("City name cannot be empty or numeric.");
			return;
		}

		if (!Validator.validateStringInput(createpo.getShipToState())) {
			new MessageResponse("State name cannot be empty or numeric.");
			return;
		}
		if (!Validator.isValidPinCode(createpo.getShipToPinCode())) {
			new MessageResponse("Enter the valid Shipping PinCode number");
			return;
		}
		if (createpo.getBillToStreet() == null || createpo.getBillToStreet().trim().length() == 0) {
			new MessageResponse("Street Billing Address cannot be empty.");
			return;
		}
		if (!Validator.validateStringInput(createpo.getBillToCity())) {
			new MessageResponse("City name cannot be empty or numeric.");
			return;
		}
		if (!Validator.validateStringInput(createpo.getBillToState())) {
			new MessageResponse("State name cannot be empty or numeric.");
			return;
		}
		if (!Validator.isValidPinCode(createpo.getBillToPinCode())) {
			new MessageResponse("Enter the valid Billing PinCode number");
			return;
		}

		if (exist != null) {
			new MessageResponse("PO with the id " + exist.getPoId() + " Already exists.");
			return;
		}
		final PurchaseOrderTemplate po = new PurchaseOrderTemplate(createpo.getPoId(), createpo.getDate(),
				createpo.getShipToStreet(), createpo.getShipToCity(), createpo.getShipToState(),
				createpo.getShipToPinCode(), createpo.getBillToStreet(), createpo.getBillToCity(),
				createpo.getBillToState(), createpo.getShipToPinCode());
		po.setSearchValues();
		new MessageResponse("PO is successfully created.");
	}

	public void getPo(final PurchaseOrderTemplate po) {

		final PurchaseOrderTemplateDetails details = new PurchaseOrderTemplateDetails(po);
	}

	public void setupPosSearch(final SearchPurchaseOrdersTemplate listpo) {

		listpo.setupSearch();
	}

	public void getPos(final SearchPurchaseOrdersTemplate searchpo) {

		final List POS = searchpo.getPo();

		final PurchaseOrderTemplateList polist = new PurchaseOrderTemplateList(POS);
	}

	public void editPo(final EditPurchaseOrderTemplate edit, final PurchaseOrderTemplate po) {

		if (edit.getDate() == null || edit.getDate().trim().length() == 0) {
			new MessageResponse("Date cannot be empty.");
			return;
		}
		if (edit.getShipToStreet() == null || edit.getShipToStreet().trim().length() == 0) {
			new MessageResponse("Street Shipping Address cannot be empty.");
			return;
		}
		if (!Validator.validateStringInput(edit.getShipToCity())) {
			new MessageResponse("City name cannot be empty or numeric.");
			return;
		}
		if (!Validator.validateStringInput(edit.getShipToState())) {
			new MessageResponse("State name cannot be empty or numeric.");
			return;
		}
		if (!Validator.isValidPinCode(edit.getShipToPinCode())) {
			new MessageResponse("Enter the valid Shipping PinCode number");
			return;
		}
		if (edit.getBillToStreet() == null || edit.getBillToStreet().trim().length() == 0) {
			new MessageResponse("Street Billing Address cannot be empty.");
			return;
		}
		if (!Validator.validateStringInput(edit.getBillToCity())) {
			new MessageResponse("City name cannot be empty or numeric.");
			return;
		}
		if (!Validator.validateStringInput(edit.getBillToState())) {
			new MessageResponse("State name cannot be empty or numeric.");
			return;
		}
		if (!Validator.isValidPinCode(edit.getBillToPinCode())) {
			new MessageResponse("Enter the valid Billing PinCode number");
			return;
		}

		po.setDate(edit.getDate());
		po.setShipToStreet(edit.getShipToStreet());
		po.setShipToCity(edit.getShipToCity());
		po.setShipToState(edit.getShipToState());
		po.setShipToPinCode(edit.getShipToPinCode());
		po.setBillToStreet(edit.getBillToStreet());
		po.setBillToCity(edit.getBillToCity());
		po.setBillToState(edit.getBillToState());
		po.setBillToPinCode(edit.getBillToPinCode());
		po.setSearchValues();
		new MessageResponse("PO details has been updated.");
	}
}