package com.AppFerreteria.app.controller;

import java.util.HashMap;
import java.util.Map;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


import com.AppFerreteria.app.model.MailContact;
import com.AppFerreteria.app.model.utils.GlobalConstants;
import com.AppFerreteria.app.services.SendEmail;

@Controller
@RequestMapping("/email")
public class ControllerSendEmail {

	@Autowired
	SendEmail send;

	@PostMapping(value = "/sendEmailBuzon")
	public ResponseEntity<?> submitContactRequest(@RequestBody MailContact mail) {

		Map<String, Object> body = new HashMap<>();
			body.put("contactRequest", mail);
			body.put("message", "Correo enviado con éxito");
			try {
				send.sendEmailBuzonContacto(GlobalConstants.CONTACT_EMAIL, mail);
			} catch (MessagingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			return new ResponseEntity<Map<String, Object>>(body, HttpStatus.OK);
	}
}
