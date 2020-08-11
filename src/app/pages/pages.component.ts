import { Component, OnInit } from "@angular/core";
import * as Waves from "node-waves";
import * as $ from "jquery";
import { User } from "firebase";

@Component({
  selector: "app-pages",
  templateUrl: "./pages.component.html",
  styleUrls: [],
})
export class PagesComponent implements OnInit {
  users: User[];

  constructor() {}

  ngOnInit() {
    // BACK TO TOP
    $(window).scroll(function () {
      if ($(this).scrollTop() > 0) $(".to-top").fadeIn();
      else $(".to-top").fadeOut();
      if ($(".navbar").offset().top > 50) {
        $(".navbar-light").addClass("top-nav-collapse");
      } else {
        $(".navbar-light").removeClass("top-nav-collapse");
      }
    });
    $(".to-top").click(function (e) {
      $("html, body").animate({ scrollTop: 0 }, 600);
    });

    Waves.attach(".navbar-nav a:not(.navbar-brand), .nav-item:not(.dropdown)", [
      "waves-light",
    ]);
    Waves.init();
  }
}
