package com.iorbit.po;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Validator {
	private static String pinCodeRegex = "[1-9][0-9]{5}$";
	private static String charRegex = "^[a-zA-Z]+$";
	private static String numRegex = "^[0-9]+$";


	public static boolean isValidPinCode(String input) {

		return matchRegex(pinCodeRegex, input);
	}

	public static boolean validateStringInput(String input) {
		return matchRegex(charRegex, input);
	}
	public static boolean validateNumberInput(String input) {
		return matchRegex(numRegex, input);
	}


	private static boolean matchRegex(String regex, String input) {
		Pattern pattern = Pattern.compile(regex);
		Matcher matcher = pattern.matcher(input);
		return matcher.matches();
	}

}
