package com.iorbit.customer;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Validator {
	private static String contact_regex = "(0/91)?[7-9][0-9]{9}";
	private static String Address_regex = "^[#.0-9a-zA-Z\\s,-]+$";
	private static String total_amount = "^(\\d*\\.)?\\d+$";
	private static String Product = "([a-zA-Z]+|[a-zA-Z]+\\s[a-zA-Z]+)";
	private static String source_regex = "([a-zA-Z]+|[a-zA-Z]+\\s[a-zA-Z]+)";

	public static boolean isValidContact(String phoneNo) {
		return matchRegex(contact_regex, phoneNo);
	}
	
	public static boolean isValidAddress(String address) {
		return matchRegex(Address_regex, address);
	}
	
	public static boolean isValidAmount(String totalAmount) {
		return matchRegex(total_amount, totalAmount);
	}
	
	public static boolean isValidProduct(String products) {
		return matchRegex(Product, products);
	}
	
	public static boolean isValidSource(String source) {
		return matchRegex(source_regex, source);
	}

	

	private static boolean matchRegex(String regex, String input) {
		Pattern pattern = Pattern.compile(regex);
		Matcher matcher = pattern.matcher(input);
		return matcher.matches();
	}
}