import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import * as Waves from "node-waves";
import * as $ from "jquery";
import { Store } from "@ngrx/store";
import { NgxSpinnerService } from "ngx-spinner";
import { AppState } from "./redux/app.store";
import { Subscription } from "rxjs";
import {
  ActivarLoadingAction,
  DesactivarLoadingAction,
} from "./redux/app.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  title = "InnovacionesJD";
  cargando: boolean;
  subscription: Subscription;

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private store: Store<AppState>
  ) {
    this.store.dispatch(new ActivarLoadingAction());
  }

  ngOnInit(): void {
    this.subscription = this.store.select("ui").subscribe((ui) => {
      if (ui.isLoading) {
        this.spinner.show();
      } else {
        this.spinner.hide();
      }
      this.cargando = ui.isLoading;
    });

    this.store.dispatch(new DesactivarLoadingAction());

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
