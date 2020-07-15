import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: [],
})
export class LoginComponent implements OnInit {
  appearance: String;
  registrationEnabled: Boolean;
  logo: String;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.appearance = "legacy";
    this.registrationEnabled = true;
    this.logo = "../assets/images/logo-jd.png";
  }

  onSuccess(event) {
    this.router.navigate(["/pages/index"]);
  }

  onError() {
    console.error();
  }

  onStrengthChanged(event) {}
}
