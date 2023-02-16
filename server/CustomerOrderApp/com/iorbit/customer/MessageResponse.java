package com.iorbit.customer;

import java.io.Serializable;

public class MessageResponse implements Serializable {
	private String message;

	public MessageResponse(final String msg) {
		this.message = msg;
	}
}
