package com.iorbit.masterdata;

import java.util.List;

public class ProductManager {
	public void createProduct(final CreateProduct createproduct, final Product exist) {
		if (createproduct.getSkuId() == null || createproduct.getSkuId().trim().length() == 0) {
			new MessageResponse("SKU Id cannot be empty.");
			return;
		}
		if (createproduct.getItemName() == null || createproduct.getItemName().trim().length() == 0) {
			new MessageResponse("Item Name cannot be empty.");
			return;
		}
		if (createproduct.getBasePrice() == null || createproduct.getBasePrice().trim().length() == 0) {
			new MessageResponse("Item Price cannot be empty.");
			return;
		}

		if (exist != null) {
			new MessageResponse("Product with the Id " + exist.getSkuId() + " Already exists.");
			return;
		}
		final Product product = new Product(createproduct.getSkuId(), createproduct.getItemName(),
				createproduct.getItemCategory(), createproduct.getItemSubcategory(), createproduct.getBasePrice());
		product.setSearchValues();
		new MessageResponse("Product is successfully created.");
	}

	public void getProduct(final Product product) {
		final ProductDetails details = new ProductDetails(product);
	}

	public void setupProductSearch(final SearchProduct listproduct) {
		listproduct.setupSearch();
	}

	public void getProducts(final SearchProduct searchproduct) {
		final List products = searchproduct.getProduct();
		final ProductList productlist = new ProductList(products);
	}

	public void editProduct(final EditProduct edit, final Product product) {

		if (edit.getItemName() == null || edit.getItemName().trim().length() == 0) {
			new MessageResponse("Item Name cannot be empty.");
			return;
		}

		if (edit.getBasePrice() == null || edit.getBasePrice().trim().length() == 0) {
			new MessageResponse("Item Price cannot be empty.");
			return;
		}


		product.setItemName(edit.getItemName());
		product.setItemCategory(edit.getItemCategory());
		product.setItemSubcategory(edit.getItemSubcategory());
		product.setBasePrice(edit.getBasePrice());
		product.setSearchValues();
		new MessageResponse("Product details has been updated.");
	}
}
