import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as $ from 'jquery';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor( private router: Router) { }

  ngOnInit() {
    AOS.init();
  }


  ngAfterViewInit(): void {
  }

  onAbout() {
    this.router.navigate(['/pages/about']);
  }

  onProjects() {
    this.router.navigate(['/pages/projects']);
  }

}
