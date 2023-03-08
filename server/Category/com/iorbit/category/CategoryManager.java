package com.iorbit.category;

import java.util.List;




public class CategoryManager {

           
	//Inserting the farmer data
	public void createCategory(CreateCategory fc, Category exist) {
		if (exist != null){
			new MessageResponse("Category with the name "+exist.getCategoryId() +" Already exists.");
			return;
		}
		Category f = new Category(fc.getCategoryId(),fc.getCategoryName(),fc.getImage(),fc.getBannerImages());
		f.setSearchValues();
		new MessageResponse("Category is successfully onboarded.");
	}
	
	
	
	
	
	
	        
			//getting the item details 
			public void getCategory(Category category) {
				CategoryDetails details = new CategoryDetails(category);
				
			}
			
			
			
			
			//listing of items details
			public void setupItemSearch(SearchCategory listitem) {
		        listitem.setupSearch();
		    }
			
			public void getitem(SearchCategory searchcategory){
			        List category = searchcategory.getCategory();
			        CategoryList td = new CategoryList(category);
			}
			
			
			
			
			//editing of farmer details
			public void editCategory(EditCategory edit,Category category) {
				
				category.setCategoryName(edit.getCategoryName());
				category.setImage(edit.getImage());
				category.setBannerImages(edit.getBannerImages());			
			
				
				
			
				new MessageResponse("Category details has been updated.");
			}	
			
		}



