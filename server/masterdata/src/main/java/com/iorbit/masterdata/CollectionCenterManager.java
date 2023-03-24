package com.iorbit.masterdata;

import java.util.List;

public class CollectionCenterManager{
	public void createCollectionCenter(CreateCollectionCenter createcc, CollectionCenter exist) {

		if (createcc.getCenterId() == null || createcc.getCenterId().trim().length() == 0) {
			new MessageResponse("Center Id cannot be empty.");
			return;
		}
		if (!Validator.validateStringInput(createcc.getCenterName())) {
			new MessageResponse("Please enter Center Name.");
			return;
		}
		if (!Validator.validateStringInput(createcc.getCenterAddress())) {
			new MessageResponse("Please enter Center Address.");
			return;
		}
		if (!Validator.validatePhoneNo(createcc.getContact())) {
			new MessageResponse("Please enter valid Contact Number.");
			return;
		}

		 CollectionCenter cc = new CollectionCenter(createcc.getcId(),createcc.getCenterId(),
				createcc.getCenterName(), createcc.getCenterAddress(), createcc.getContact());
		cc.setSearchValues();
		new MessageResponse("Collection Center is successfully created.");
	}

	public void getCollectionCenter( CollectionCenter collectionCenter) {
		 CollectionCenterDetails details = new CollectionCenterDetails(collectionCenter);
	}

	public void setupCollectionCenterSearch( SearchCollectionCenter listcollectionCenter) {
		listcollectionCenter.setupSearch();
	}

	public void getCollectionCenters( SearchCollectionCenter searchcollectionCenter) {
		List farmers = searchcollectionCenter.getCollectionCenter();
		CollectionCenterList cclist = new CollectionCenterList(farmers);
	}

	public void editCollectionCenter( EditCollectionCenter edit,  CollectionCenter cc) {

		if (!Validator.validateStringInput(edit.getCenterName())) {
			new MessageResponse("Please enter Center Name.");
			return;
		}
		if (!Validator.validateStringInput(edit.getCenterAddress())) {
			new MessageResponse("Please enter Center Address.");
			return;
		}
		if (!Validator.validatePhoneNo(edit.getContact())) {
			new MessageResponse("Please enter valid Contact Number.");
			return;
		}
		cc.setCenterId(edit.getCenterId());
		cc.setCenterName(edit.getCenterName());
		cc.setCenterAddress(edit.getCenterAddress());
		cc.setContact(edit.getContact());
		cc.setSearchValues();
		new MessageResponse("Collection Center details has been updated.");
	}
}
