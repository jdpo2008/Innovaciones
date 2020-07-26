import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-consulta",
  templateUrl: "./consulta.component.html",
  styles: [],
})
export class ConsultaComponent implements OnInit {
  tabindex: number;

  constructor() {}

  ngOnInit(): void {
    this.tabindex = 0;
  }

  setIndex(event) {
    this.tabindex = event;
  }
}
