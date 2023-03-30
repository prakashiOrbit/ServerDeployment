package com.iorbit.category;

import java.util.ArrayList;
import java.util.List;



public class CategoryList implements java.io.Serializable{
	class CategoryData implements java.io.Serializable{
		private String categoryId;
		private String categoryName;
		private String image;
		private String bannerImage;
		private String searchableValue;

		
		CategoryData(Category category){
			
			categoryId=category.getCategoryId();
			categoryName=category.getCategoryName();
			image=category.getImage();
			bannerImage=category.getBannerImages();
			
		}
	}
	
	private List<CategoryData> category;
	
	public CategoryList(List listcategory) {
		category=new ArrayList<CategoryData>();
		System.out.println("Got items as: "+listcategory);
		for(int i=0;i<listcategory.size();i++) {
			CategoryData data=new CategoryData((Category)listcategory.get(i));
			category.add(data);
		}
	}
}
