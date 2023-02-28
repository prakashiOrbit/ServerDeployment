package com.iorbit.farmer;


public class FarmerLinks implements java.io.Serializable{
	private String fId;
	private String centerId;
	private String centerName;
    	
	FarmerLinks(String fId)
	{
		setFId(fId);
	}
	
	public String getFId() { return fId; }
	public void setFId(String fId) { this.fId = fId; }
	public String getCenterId() { return centerId; }
	public void setCenterId(String centerId) { this.centerId = centerId; }
	public String geteCenterName() { return centerName; }
	public void setCenterName(String centerName) { this.centerName = centerName; }
}
