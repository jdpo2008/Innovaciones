import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styles: []
})
export class ParallaxComponent implements OnInit {
@Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
