import { AfterViewInit, Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }


  ngAfterViewInit(): void {
  }

}
