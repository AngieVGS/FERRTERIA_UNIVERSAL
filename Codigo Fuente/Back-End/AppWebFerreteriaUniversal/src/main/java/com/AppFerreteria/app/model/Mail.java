package com.AppFerreteria.app.model;


public class Mail {
	
	private String name;
	private String email;
	private String subject;
	private String content;
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	@Override
	public String toString() {
		return "Mail [name=" + name + ", email=" + email + ", subject=" + subject + ", content=" + content + "]";
	}
}
