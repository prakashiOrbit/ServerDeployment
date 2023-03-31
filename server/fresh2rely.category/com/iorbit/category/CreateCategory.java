package com.iorbit.category;

public class CreateCategory implements java.io.Serializable{
	public CreateCategory(){
	}

	private String categoryId;
	private String categoryName;
	private String image;
	private String bannerImage;
	

	

	public String getCategoryId() { return categoryId;}
	public String getCategoryName() { return categoryName; }
	
	public String getImage() { return image; }
	
	public String getBannerImages() { return bannerImage; }
	
}
