package com.iorbit.farmer;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Validator {
	private static String name_regex = "^[a-zA-Z][a-zA-Z\\s]+$";
	private static String contact_regex = "(0/91)?[7-9][0-9]{9}";
	private static String city_regex = "([a-zA-Z]+|[a-zA-Z]+\\s[a-zA-Z]+)";
	private static String state_regex = "([a-zA-Z]+|[a-zA-Z]+\\s[a-zA-Z]+)";
	private static String pincode_regex = "\\d{6}";
	private static String aadhar_regex = "^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$";
	private static String pan_regex = "[A-Z]{5}[0-9]{4}[A-Z]{1}";
	private static String Account_regex = "^[0-9]{9,18}$";
	private static String ifsc_regex = "^[A-Z]{4}0[A-Z0-9]{6}$";

	public static boolean isValidName(String name) {
		return matchRegex(name_regex, name);
	}

	public static boolean isValidContact(String phoneNo) {
		return matchRegex(contact_regex, phoneNo);
	}

	public static boolean isValidCity(String city) {
		return matchRegex(city_regex, city);
	}

	public static boolean isValidState(String state) {
		return matchRegex(state_regex, state);
	}

	public static boolean isValidPinCode(String pinCode) {
		return matchRegex(pincode_regex, pinCode);
	}

	public static boolean isValidAadharNum(String aadharNo) {
		return matchRegex(aadhar_regex, aadharNo);
	}

	public static boolean isValidPan(String panNo) {
		return matchRegex(pan_regex, panNo);
	}

	public static boolean isValidAccount(String accountNo) {
		return matchRegex(Account_regex, accountNo);
	}

	public static boolean isValidIfsc(String ifscCode) {
		return matchRegex(ifsc_regex, ifscCode);
	}

	private static boolean matchRegex(String regex, String input) {
		Pattern pattern = Pattern.compile(regex);
		Matcher matcher = pattern.matcher(input);
		return matcher.matches();
	}
}