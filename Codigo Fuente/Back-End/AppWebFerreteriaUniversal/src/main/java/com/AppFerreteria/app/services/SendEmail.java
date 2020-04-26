package com.AppFerreteria.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import org.springframework.mail.javamail.MimeMessageHelper;

import com.AppFerreteria.app.model.MailContact;
import com.AppFerreteria.app.model.utils.GlobalConstants;

@Service
public class SendEmail {

    //Importante hacer la inyección de dependencia de JavaMailSender:
    @Autowired
    private JavaMailSender mailSender;

    //Pasamos por parametro: destinatario, asunto y el mensaje
    public void sendEmail(String to, String subject, String content) {

        SimpleMailMessage email = new SimpleMailMessage();

        email.setTo(to);
        email.setSubject(subject);
        email.setText(content);
       
        mailSender.send(email);
    }
    
  //Pasamos por parametro: destinatario, asunto y el mensaje
    public void sendEmailBuzonContacto(String to, MailContact mail) throws MessagingException {

        SimpleMailMessage email = new SimpleMailMessage();
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");
        String htmlMsg = "Nombre:"+mail.getNombre()+"<br/>"+
                "<strong>E-mail:</strong>"+mail.getEmail()+" <br/>"+
                "<strong>Telefono:</strong>"+mail.getPhone()+"<br/>"+
                "<strong>Mensaje:</strong>"+ mail.getMensaje();
      //mimeMessage.setContent(htmlMsg, "text/html"); /** Use this or below line **/
        helper.setText(htmlMsg, true); // Use this or above line.
        helper.setTo(to);
        helper.setSubject(GlobalConstants.SUBJECT_MAIL_CONTACT);
        mailSender.send(mimeMessage);
    }
}
