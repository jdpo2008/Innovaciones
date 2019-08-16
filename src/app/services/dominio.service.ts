import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})

export class DominioService {
  Incremento = 0;
  constructor() {
  }

  buscarDominio(texto, extension) {
    return $.ajax({
      url: 'buscador.php',
      type: 'POST',
      dataType: 'json',
      // beforeSend: this.setHeader,
      data: { Nomb: texto, 'Ext': extension, 'Incremento' : this.Incremento++ },
    });
  }

}
