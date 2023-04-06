package com.iorbit.cart;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Validator {
	private static String categoryname_regex = "^[a-zA-Z][a-zA-Z\\s]+$";
	private static String itemname_regex = "^[a-zA-Z][a-zA-Z\\s]+$";
	private static String price_regex = "^[0-9]+(\\.[0-9]+)?$";
	private static String quantity_regex = "^[0-9]+(\\.[0-9]+)?$";
	private static String instock_regex = "^[0-9]+(\\.[0-9]+)?$";
	private static String discountPrice_regex = "^[0-9]+(\\.[0-9]+)?$";
	
	public static boolean isValidCategoryName(String categoryName) {
		return matchRegex(categoryname_regex, categoryName);
	}

	public static boolean isValidItemName(String itemName) {
		return matchRegex(itemname_regex, itemName);
	}

	public static boolean isValidPrice(String price) {
		return matchRegex(price_regex, price);
	}

	public static boolean isValidQuantity(String quantity) {
		return matchRegex(quantity_regex, quantity);
	}

	public static boolean isValidInstock(String inStock) {
		return matchRegex(instock_regex, inStock);
	}

	public static boolean isValidDiscountPrice(String discountPrice) {
		return matchRegex(discountPrice_regex, discountPrice);
	}

	

	private static boolean matchRegex(String regex, String input) {
		Pattern pattern = Pattern.compile(regex);
		Matcher matcher = pattern.matcher(input);
		return matcher.matches();
	}
}
