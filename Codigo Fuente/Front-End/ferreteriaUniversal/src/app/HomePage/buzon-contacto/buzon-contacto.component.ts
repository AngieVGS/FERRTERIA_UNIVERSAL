import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormsModule, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import { MessageService } from 'src/app/services/message.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-buzon-contacto',
  templateUrl: './buzon-contacto.component.html',
  styleUrls: ['./buzon-contacto.component.css']
})

export class BuzonContactoComponent implements OnInit {

  datos_formulario_contacto: FormGroup;

  constructor(public messageService: MessageService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.datos_formulario_contacto = this.formBuilder.group({
      //[Valor inicial del campo, Validadores síncronos, Validadores asíncronos]
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      subject: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  get formulario(){
    return this.datos_formulario_contacto.controls; 
  }

  contactForm(form) {
    this.messageService.sendMessage(form).subscribe(() => {
        const newLocal = 'Formulario de contacto';
       swal.fire(newLocal, 'Mensaje enviado correctamente', 'success');
       this.vaciarCampos();
    });
  }

  vaciarCampos(){
    this.datos_formulario_contacto.patchValue({
      name: '',
      email: '',
      phone: '',
      subject: '',
      content: ''
    });

    this.datos_formulario_contacto = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      subject: ['', Validators.required],
      content: ['', Validators.required]
    });
  }
}
