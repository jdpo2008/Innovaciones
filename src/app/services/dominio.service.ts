import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

let headers: HttpHeaders = new HttpHeaders();

@Injectable({
  providedIn: 'root'
})

export class DominioService {
  headers = headers.append( 'Access-Control-Allow-Origin', '*');

  URL_SERVICIO = 'https://api.jsonwhois.io/availability';
  constructor(private http: HttpClient) {
  }

  buscarDominio(domain) {
    const key = 'hDnnOl0AHJ0rF5pOdODto2Q4MEfdqCWj';
    const url = this.URL_SERVICIO + `?key=${key}&domain=${domain}`;

    return this.http.get(url, {headers}).pipe();

  }

}
