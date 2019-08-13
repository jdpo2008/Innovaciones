import { Component, OnInit } from "@angular/core";
export interface PeriodicElement {
  dominio: string;
  position: number;
  precio: number;
  moneda: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, dominio: '.net', precio: 250000, moneda: 'BsS.'},
  {position: 2, dominio: '.com', precio: 210000, moneda: 'BsS.'},
  {position: 3, dominio: '.org', precio: 240000, moneda: 'BsS.'},
  {position: 4, dominio: '.info', precio: 250000, moneda: 'BsS.'},
  {position: 5, dominio: '.biz', precio: 280000, moneda: 'BsS.'},
  {position: 6, dominio: '.net.ve', precio: 22000, moneda: 'BsS.'},
  {position: 7, dominio: '.com.ve', precio: 22000, moneda: 'BsS.'},
  {position: 8, dominio: '.org.ve', precio: 22000, moneda: 'BsS.'},
  {position: 9, dominio: '.co.ve', precio: 22000, moneda: 'BsS.'},
  {position: 10, dominio: '.web.ve', precio: 22000, moneda: 'BsS.'},
  {position: 11, dominio: '.info.ve', precio: 22000, moneda: 'BsS.'},
];

@Component({
  selector: "app-service-extra",
  templateUrl: "./service-extra.component.html",
  styles: []
})

export class ServiceExtraComponent implements OnInit {

  displayedColumns: string[] = ['position', 'dominio', 'precio', 'moneda'];
  dataSource = ELEMENT_DATA;
  constructor() {
  }

  ngOnInit() {

  }

  buscarDominio() {

  }
}
