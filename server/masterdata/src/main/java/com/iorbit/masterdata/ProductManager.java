package com.iorbit.masterdata;

import java.io.Serializable;
import java.util.List;

public class ProductManager implements Serializable {
	public void createProduct(CreateProduct createproduct, Product exist) {
		if (createproduct.getSkuId() == null || createproduct.getSkuId().trim().length() == 0) {
			new MessageResponse("SKU Id cannot be empty.");
			return;
		}
		if (!Validator.isValidCity(createproduct.getItemName())) {
			new MessageResponse("Please enter Valid Item Name");
			return;
		}
		if (!Validator.isValidCity(createproduct.getItemCategory())) {
			new MessageResponse("Please enter Valid Item Category Name");
			return;
		}
		if (!Validator.isValidCity(createproduct.getItemSubcategory())) {
			new MessageResponse("Please enter Valid Item SubCategory");
			return;
		}
		if (!Validator.isValidPrice(createproduct.getBasePrice())) {
			new MessageResponse("Please enter Valid Item Price");
			return;
		}

		if (exist != null) {
			new MessageResponse("Product with the Id " + exist.getSkuId() + " Already exists.");
			return;
		}
		Product product = new Product(createproduct.getpId(), createproduct.getSkuId(), createproduct.getItemName(),
				createproduct.getItemCategory(), createproduct.getItemSubcategory(), createproduct.getBasePrice());
		product.setSearchValues();
		new MessageResponse("Product is successfully created.");
	}

	public void getProduct(Product product) {
		ProductDetails details = new ProductDetails(product);
	}

	public void setupProductSearch(SearchProduct listproduct) {
		listproduct.setupSearch();
	}

	public void getProducts(SearchProduct searchproduct) {
		final List farmers = searchproduct.getProduct();
		final ProductList productlist = new ProductList(farmers);
	}

	public void editProduct(EditProduct edit, Product product) {

		if (!Validator.isValidCity(edit.getItemName())) {
			new MessageResponse("Please enter Valid Item Name");
			return;
		}
		if (!Validator.isValidCity(edit.getItemCategory())) {
			new MessageResponse("Please enter Valid Item Category Name");
			return;
		}
		if (!Validator.isValidCity(edit.getItemSubcategory())) {
			new MessageResponse("Please enter Valid Item SubCategory");
			return;
		}
		if (!Validator.isValidPrice(edit.getBasePrice())) {
			new MessageResponse("Please enter Valid Item Price");
			return;
		}

		product.setSkuId(edit.getSkuId());
		product.setItemName(edit.getItemName());
		product.setItemCategory(edit.getItemCategory());
		product.setItemSubcategory(edit.getItemSubcategory());
		product.setBasePrice(edit.getBasePrice());
		product.setSearchValues();
		new MessageResponse("Product details has been updated.");
	}
}
