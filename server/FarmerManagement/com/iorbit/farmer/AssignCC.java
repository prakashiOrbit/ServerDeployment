package com.iorbit.farmer;

public class AssignCC implements java.io.Serializable{
	private String fId;
	private String centerID;
	private String centerName;
    	
	AssignCC(FarmerLinks fl)
	{
		fId = fl.getFId();
		centerID=fl.getCenterID();
		centerName=fl.geteCenterName()
	}
	
	public String getFId() { return fId; }
	public String getCenterID() { return centerID; }
	public String getCenterName() { return centerName; }
}




//AssignCC(String fId, String centerID)
//{
//	this.fId=fId;
//	this.centerID=centerID;
//}