package com.iorbit.masterdata;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Validator {
	private static String licenseNo = "^[A-Z]{2}-[0-9]{2}-[0-9]{4}-[0-9]{7}$";
	private static String pinCodeRegex = "[1-9][0-9]{5}$";
	private static String charRegex = "^[^0-9]+$";
	private static String numRegex = "^[0-9]+$";
	private static String city_regex = "[a-zA-Z ]+$";
	private static String price = "^[0-9]+(.[0-9]+)?$";
	private static String address = "^[a-zA-Z0-9][a-zA-Z0-9\\s,-#]*$";
	// private static String vinNo =
	// "^([A-HJ-NPR-Z\\d]{3}[A-HJ-NPR-Z\\d\\*]{5}\\d{2}[A-HJ-NPR-Z\\d\\*]{2}\\d{6})$";

	// private static String price = "^\\d{1,2}(,\\d{2,3})*(\\.\\d{1,2})?₹?$";

	private static String phoneNo = "(0/91)?[6-9][0-9]{9}";

	public static boolean isValidPinCode(String input) {

		return matchRegex(pinCodeRegex, input);
	}

	public static boolean isValidAddress(String input) {

		return matchRegex(address, input);
	}

	public static boolean isValidCity(String input) {
		return matchRegex(city_regex, input);
	}

	public static boolean isValidPrice(String input) {
		return matchRegex(price, input);
	}

	public static boolean validateStringInput(String input) {
		return matchRegex(charRegex, input);
	}

	public static boolean validateNumberInput(String input) {
		return matchRegex(numRegex, input);
	}

	public static boolean validateLicenseNo(String input) {
		return matchRegex(licenseNo, input);
	}

//	public static boolean validateVinNo(String input) {
//		return matchRegex(vinNo, input);
//	}

//	public static boolean validatePrice(String input) {
//		return matchRegex(price, input);
//	}

	public static boolean validatePhoneNo(String input) {
		return matchRegex(phoneNo, input);
	}

	private static boolean matchRegex(String regex, String input) {
		Pattern pattern = Pattern.compile(regex);
		Matcher matcher = pattern.matcher(input);
		return matcher.matches();
	}

}
