import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pages",
  templateUrl: "./pages.component.html",
  styleUrls: []
})
export class PagesComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // BACK TO TOP
    $(window).scroll(function() {
      if ($(this).scrollTop() > 0) $(".to-top").fadeIn();
      else $(".to-top").fadeOut();
    });
    $(".to-top").click(function(e) {
      $("html, body").animate({ scrollTop: 0 }, 600);
    });
  }
}
