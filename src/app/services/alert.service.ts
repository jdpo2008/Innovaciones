import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  setMensaje(tipo: any, titulo: string, mensaje: string, duracion: number) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: duracion,
      background: '#32323a',
      customClass: {
        title: 'title-class',
        content: 'content-class'
      }
    });

    Toast.fire({
      type: tipo,
      title: titulo,
      text: mensaje
    });
  }
}
