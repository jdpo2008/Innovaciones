import { Component, OnInit } from "@angular/core";
import { ConsultaService } from "../../services/consulta.service";
import { Type } from "../../types/consulta";

@Component({
  selector: "app-consulta",
  templateUrl: "./consulta.component.html",
  styles: [],
})
export class ConsultaComponent implements OnInit {
  tabindex: number;

  constructor(private _service: ConsultaService) {}

  ngOnInit(): void {
    this.tabindex = 0;
  }

  setIndex(event) {
    this.tabindex = event;
  }
}
