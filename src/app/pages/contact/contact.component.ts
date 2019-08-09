import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MensajeContacto } from '../../types/messages';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {
  submited = false;
  mensajeContacto: MensajeContacto;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(contactForm: NgForm) {
    this.submited = true;
    if (contactForm.invalid) {
      console.log('Informacion: ' + JSON.stringify(contactForm.control.errors));
      return;
    }
    this.mensajeContacto = contactForm.value;
    console.log('Informacion: ' + JSON.stringify(this.mensajeContacto)  );
  }

}
