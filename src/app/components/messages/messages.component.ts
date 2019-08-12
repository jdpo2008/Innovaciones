import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styles: []
})
export class MessagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     // TOGGLE MESSAGES BOX
     $(".theme-config-toggle").on("click", function() {
      $(this)
        .parents(".theme-config")
        .toggleClass("opened");
    });
  }

}
