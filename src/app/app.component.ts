import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { MatFabMenu } from "@angular-material-extensions/fab-menu";
import * as Waves from "node-waves";
import * as $ from "jquery";
import { ResizeService } from "./services/app.service";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  title = "InnovacionesJD";

  fabButtonsRandom: MatFabMenu[] = [
    {
      id: 1,
      icon: "create",
    },
    {
      id: 2,
      icon: "mail",
    },
    {
      id: 3,
      icon: "file_copy",
    },
    {
      id: 4,
      icon: "phone",
    },
  ];

  //isSmallScreen: boolean;

  constructor(
    private router: Router,
    private _resizeService: ResizeService,
    private breakpointObserver: BreakpointObserver
  ) {
    // this.breakpointObserver
    //   .observe([Breakpoints.HandsetLandscape, Breakpoints.HandsetPortrait])
    //   .subscribe((result) => {
    //     console.log(result);
    //     if (result.matches) {
    //       this.isSmallScreen = true;
    //       console.log(this.isSmallScreen);
    //     }
    //   });
    // this.isSmallScreen = this.breakpointObserver.isMatched("500");
  }

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

    $(window).resize(function () {
      if ($(this).innerWidth() < 974)
        $(".fix-bottom-right").css("display", "block");
      else $(".fix-bottom-right").css("display", "none");
    });
  }

  ngOnDestroy() {}
}
