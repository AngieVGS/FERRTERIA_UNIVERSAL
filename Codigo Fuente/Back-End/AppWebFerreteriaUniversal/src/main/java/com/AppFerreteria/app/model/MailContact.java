package com.AppFerreteria.app.model;

public class MailContact extends Mail {

	private String phone;

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	@Override
	public String toString() {
		return "MailContact [phone=" + phone + "]";
	}
}