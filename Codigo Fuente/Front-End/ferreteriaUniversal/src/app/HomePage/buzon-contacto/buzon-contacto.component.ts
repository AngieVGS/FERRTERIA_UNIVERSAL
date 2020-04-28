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
      nombre_completo: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      asunto: ['', Validators.required],
      mensaje: ['', Validators.required]
    });
  }

  get formulario(){
    return this.datos_formulario_contacto.controls; 
  }

  contactForm(form) {
    this.messageService.sendMessage(form).subscribe((data) => {
      console.log("RESULTADO",  data);
      if(data!=null){
        const newLocal = 'Formulario de contacto';
        swal.fire(newLocal, 'Mensaje enviado correctamente', 'success');
        this.vaciarCampos();
      }else{
        swal.fire('Formulario de contacto', 'No se pudo enviar el mensaje', 'error');
        this.vaciarCampos();
      }
    });
  }

  vaciarCampos(){
    this.datos_formulario_contacto.patchValue({
      nombre_completo: '',
      correo: '',
      telefono: '',
      asunto: '',
      mensaje: ''
    });
    this.datos_formulario_contacto = this.formBuilder.group({
      nombre_completo: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      asunto: ['', Validators.required],
      mensaje: ['', Validators.required]
    });
  }
}
