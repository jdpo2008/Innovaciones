import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styles: []
})
export class MapsComponent implements OnInit {
  lat: number;
  lng: number;

  constructor() { }
 
  ngOnInit() {
    this.lat = 10.258087;
    this.lng = -67.800245;

  }

}
