package com.iorbit.masterdata;

import java.io.Serializable;
import java.util.List;

public class CollectionCenterManager implements Serializable {
	public void createCollectionCenter(final CreateCollectionCenter createcc, final CollectionCenter exist) {
		if (createcc.getCenterId() == null || createcc.getCenterId().trim().length() == 0) {
			new MessageResponse("Collection Center Id cannot be empty.");
			return;
		}
		if (createcc.getCenterName() == null || createcc.getCenterName().trim().length() == 0) {
			new MessageResponse("Center Name cannot be empty.");
			return;
		}
		if (createcc.getCenterAddress() == null || createcc.getCenterAddress().trim().length() == 0) {
			new MessageResponse("Center address cannot be empty.");
			return;
		}
		if (!Validator.validatePhoneNo(createcc.getContact())) {
			new MessageResponse("Please enter valid Contact Number.");
			return;
		}

		
		if (exist != null) {
			new MessageResponse("Collection_Center with the id " + exist.getCenterId() + " Already exists.");
			return;
		}
		final CollectionCenter cc = new CollectionCenter(createcc.getCenterId(), createcc.getCenterName(),
				createcc.getCenterAddress(), createcc.getContact());
		cc.setSearchValues();
		new MessageResponse("Collection_Center is successfully created.");
	}

	public void getCollectionCenter(final CollectionCenter cc) {
		final CollectionCenterDetails details = new CollectionCenterDetails(cc);
	}

	public void setupCollectionCenterSearch(final SearchCollectionCenter listcc) {
		listcc.setupSearch();
	}

	public void getCollectionCenters(final SearchCollectionCenter searchcc) {
		final List centers = searchcc.getCollectionCenter();
		final CollectionCenterList cclist = new CollectionCenterList(centers);
	}

	public void editCollectionCenter(final EditCollectionCenter edit, final CollectionCenter cc) {
		
		if (edit.getCenterName() == null || edit.getCenterName().trim().length() == 0) {
			new MessageResponse("Center Name cannot be empty.");
			return;
		}
		if (edit.getCenterAddress() == null || edit.getCenterAddress().trim().length() == 0) {
			new MessageResponse("Center address cannot be empty.");
			return;
		}
		if (!Validator.validatePhoneNo(edit.getContact())) {
			new MessageResponse("Please enter valid Contact Number.");
			return;
		}
		cc.setCenterName(edit.getCenterName());
		cc.setCenterAddress(edit.getCenterAddress());
		cc.setContact(edit.getContact());
		cc.setSearchValues();
		new MessageResponse("Collection_Center details has been updated.");
	}
}
