import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as Waves from "node-waves";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "InnovacionesJD";

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(["/pages/index"]);
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) $(".to-top").fadeIn();
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
