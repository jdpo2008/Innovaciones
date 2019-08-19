import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { MensajeContacto } from "../../types/messages";
import { AlertService } from '../../services/alert.service';

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.css"]
})
export class ContactFormComponent implements OnInit {
  addressForm: FormGroup;
  summited = false;
  validationMessages: any;
  mensajeContacto: MensajeContacto;

  constructor(private fb: FormBuilder, private alertaservice: AlertService) {
    this.validationMessages = {
      celular: [
        {
          type: "minlength",
          message: "El numero es invalido debe tener 12 digitos"
        },
        {
          type: "maxlength",
          message: "El numero es invalido debe tener 12 digitos"
        },
        { type: "pattern", message: "El campo solo debe contener numeros" }
      ],
      telefono: [
        {
          type: "minlength",
          message: "El numero es invalido debe tener 12 digitos"
        },
        {
          type: "maxlength",
          message: "El numero es invalido debe tener 12 digitos"
        },
        { type: "pattern", message: "El campo solo debe contener numeros" }
      ]
    };

    this.addressForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      asunto: [null, [Validators.required]],
      address: [null, Validators.required],
      celular: [
        null,
        [
          Validators.compose([
            Validators.minLength(10),
            Validators.maxLength(12),
            Validators.pattern(/^[0-9]\d{6,10}$/)
          ])
        ]
      ],
      telefono: [
        null,
        Validators.compose([
          Validators.minLength(10),
          Validators.maxLength(12),
          Validators.pattern(/^[0-9]\d{6,10}$/)
        ])
      ]
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.addressForm.controls;
  }

  onSubmit() {
    this.summited = true;

    if (this.addressForm.invalid) {
      return;
    }

    $.ajax({
      url: 'enviarCorreo.php',
      type: 'POST',
      dataType: 'json',
      data: {
        "firstName": this.f.firstName.value,
        "lastName": this.f.lastName.value,
        "email": this.f.email.value,
        "asunto":  this.f.asunto.value,
        "celular": this.f.celular.value,
        "telefono": this.f.telefono.value,
        "address": this.f.address.value
      }
    }).done((data) => {
      if (data.ok) {
        this.alertaservice.setMensaje('success', 'Excelente!..', data.mensaje, 5000 );
      } else {
        this.alertaservice.setMensaje('error', 'Ops!..', data.mensaje, 5000 );
      }
    }).fail((err) => {
      console.log(err);
    }).always(() => {
      console.log('solicitud completa');
    });

  }
}
