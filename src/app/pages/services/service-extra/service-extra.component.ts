import { Component, OnInit } from "@angular/core";
import { DominioService } from "../../../services/dominio.service";
import { AlertService } from "../../../services/alert.service";

export interface PeriodicElement {
  dominio: string;
  position: number;
  precio: number;
  moneda: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, dominio: ".com", precio: 10, moneda: "USD$" },
  { position: 2, dominio: ".net", precio: 12, moneda: "USD$" },
  { position: 3, dominio: ".org", precio: 12, moneda: "USD$" },
  { position: 4, dominio: ".info", precio: 12, moneda: "USD$" },
  { position: 5, dominio: ".biz", precio: 12, moneda: "USD$" },
  { position: 6, dominio: ".us", precio: 10, moneda: "USD$" },
  { position: 7, dominio: ".pe", precio: 65, moneda: "USD$" },
  { position: 8, dominio: ".com.pe", precio: 60, moneda: "USD$" },
  { position: 9, dominio: ".ve", precio: 5, moneda: "USD$" },
  { position: 10, dominio: ".com.ve", precio: 50, moneda: "USD$" },
];

@Component({
  selector: "app-service-extra",
  templateUrl: "./service-extra.component.html",
  styles: [],
})
export class ServiceExtraComponent implements OnInit {
  dominio = "";
  dominios: any[] = [];
  displayedColumns: string[] = ["position", "dominio", "precio", "moneda"];
  dataSource = ELEMENT_DATA;
  error = "Debes Ingresar un dominio valido, ejemplo www.google.com";
  extension = ".com";
  submited = false;
  src = [];
  constructor(
    private dominioService: DominioService,
    private alertaservice: AlertService
  ) {}

  ngOnInit() {
    this.dominios = ELEMENT_DATA;
    this.src = [
      {
        path: "../../../../assets/images/landing-page.png",
        cardtitle: "Landing Page",
        cardsubtitle: "HTML5-BS4",
      },
      {
        path: "../../../../assets/images/landing-page.png",
        cardtitle: "Smarty Template",
        cardsubtitle: "HTML5-BS4",
      },
      {
        path: "../../../../assets/images/chamelong-template.jpg",
        cardtitle: "Chamelon",
        cardsubtitle: "HTML5-BS4",
      },
    ];
  }

  buscarDominio(texto, extension) {
    this.submited = true;
    if (texto === "" || extension === "") {
      this.alertaservice.setMensaje(
        "warning",
        "Atención.",
        "Debes Ingresar un dominio formato www.google.com",
        5000
      );
      return;
    }

    this.dominioService
      .buscarDominio(texto, extension)
      .done((data) => {
        if (data.disponible) {
          this.alertaservice.setMensaje(
            "success",
            "Excelente!..",
            "El Dominio " + texto + extension + " esta disponible",
            5000
          );
        } else {
          this.alertaservice.setMensaje(
            "error",
            "Ops!..",
            "El Dominio " + texto + extension + " no esta disponible",
            5000
          );
        }
      })
      .fail((err) => {
        this.alertaservice.setMensaje(
          "error",
          "Ops!..",
          "Error: " + err.status + " Codigo: " + err.statusText,
          5000
        );
      })
      .always(() => {
        console.log("solicitud completa");
      });
  }
}
