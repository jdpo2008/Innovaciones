import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MensajeContacto } from '../../types/messages';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  addressForm: FormGroup;
  summited = false;
  validation_messages = {};
  mensajeContacto: MensajeContacto;

  constructor(private fb: FormBuilder) {
    this.validation_messages = {
      'celular': [
          { type: 'minlength', message: 'El numero es invalido debe tener 12 digitos' },
          { type: 'maxlength', message: 'El numero es invalido debe tener 12 digitos' },
          { type: 'pattern', message: 'El campo solo debe contener numeros' }
      ],
      'telefono': [
        { type: 'minlength', message: 'El numero es invalido debe tener 12 digitos' },
        { type: 'maxlength', message: 'El numero es invalido debe tener 12 digitos' },
        { type: 'pattern', message: 'El campo solo debe contener numeros' }
    ]
    };
    this.addressForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      asunto: [null, [Validators.required]],
      address: [null, Validators.required],
      celular: [null, [ Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(12),
        Validators.pattern(/^[0-9]\d{6,10}$/)
      ])]],
      telefono: [null,  Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(12),
        Validators.pattern(/^[0-9]\d{6,10}$/)
      ])],
    });
  }
  get f() {
    return this.addressForm.controls;
  }

  onSubmit() {
    this.summited = true;

    if (this.addressForm.invalid) {
      console.log(this.f.firstName.value);
      return;
    }

    alert('Thanks!');
  }
}
