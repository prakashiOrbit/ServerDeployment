package com.iorbit.category;



public class CategoryDetails implements java.io.Serializable{
	

	private String categoryId;
	private String categoryName;
	private String image;
	private String bannerImage;
	

	
	public CategoryDetails(Category category){
		
		categoryId=category.getCategoryId();
		categoryName=category.getCategoryName();
		image=category.getImage();
		bannerImage=category.getBannerImages();
		
		

	}
	public String getCategoryId() { return categoryId;}
	public String getCategoryName() { return categoryName; }
	
	public String getImage() { return image; }
	
	public String getBannerImages() { return bannerImage; }
	
	
}

