package com.AppFerreteria.app.model;


public class Mail {
	
	private String nombre;
	private String email;
	private String subject;
	private String mensaje;

	
	public String getNombre() {
		return nombre;
	}


	public void setNombre(String nombre) {
		this.nombre = nombre;
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


	public String getMensaje() {
		return mensaje;
	}


	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}


	@Override
	public String toString() {
		return "Mail [nombre=" + nombre + ", email=" + email + ", subject=" + subject + ", mensaje=" + mensaje + "]";
	}

}
