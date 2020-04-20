import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'src/app/services/message.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-buzon-contacto',
  templateUrl: './buzon-contacto.component.html',
  styleUrls: ['./buzon-contacto.component.css']
})

export class BuzonContactoComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

  contactForm(form) {
    this.messageService.sendMessage(form).subscribe(() => {
      const newLocal = 'Formulario de contacto';
      swal.fire(newLocal, 'Mensaje enviado correctamente', 'success');
      });
  }

}
