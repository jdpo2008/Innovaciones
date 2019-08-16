import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styles: []
})
export class ImgCardComponent implements OnInit {
  @Input() src = '';
  @Input() cardtitle = '';
  @Input() cardsubtitle = '';

  constructor() { }

  ngOnInit() {

  }

}
