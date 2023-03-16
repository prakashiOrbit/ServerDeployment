package com.iorbit.category;

public class Category implements java.io.Serializable {

	private String categoryId;
	private String categoryName;
	private String image;
	private String bannerImage;
	private String searchableValue;


	public Category(String categoryId,String categoryName,String image,String bannerImage) {

		this.categoryId=categoryId;
		this.categoryName=categoryName;
		this.image=image;
		this.bannerImage=bannerImage;
		
		
		
	}
	public Category(String categoryName,String image,String bannerImage) {

		
		this.categoryName=categoryName;
		this.image=image;
		this.bannerImage=bannerImage;
	}
	
	
	public Category(String searchable) {

	}
	
	public String getCategoryId() { return categoryId;}
	public String getCategoryName() { return categoryName; }
	public void setCategoryName(String categoryName) { this.categoryName = categoryName; }
	public String getImage() { return image; }
	public void setImage(String Image) { this.image = Image; }
	public String getBannerImages() { return bannerImage; }
	public void setBannerImages(String bannerImage) { this.bannerImage = bannerImage; }
	
	
	public void setSearchValues() {
		searchableValue = categoryId + "|" + categoryName + "|" + image + "|" + bannerImage ; 
	}
	
	
}