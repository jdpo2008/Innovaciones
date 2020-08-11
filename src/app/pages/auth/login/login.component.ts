import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserInfo, FirebaseError } from "firebase/app";
import { Store } from "@ngrx/store";
import { AppState } from "../../../redux/app.store";
import { LoginSuccessAction, AuthError } from "../auth.actions";
import { AlertService } from "../../../services/alert.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: [],
})
export class LoginComponent implements OnInit {
  appearance: String;
  registrationEnabled: Boolean;
  logo: String;
  user: UserInfo;
  accountErrorMessage: string;
  constructor(
    private router: Router,
    private store: Store<AppState>,
    private _alertaService: AlertService
  ) {}

  ngOnInit(): void {
    this.appearance = "legacy";
    this.registrationEnabled = true;
    this.logo = "../assets/images/logo-jd.png";
  }

  onSuccess(event) {
    this.router.navigate(["/pages/index"]);
    const user: UserInfo = {
      uid: event.uid,
      displayName: event.displayName,
      email: event.email,
      photoURL: event.photoURL,
      phoneNumber: event.phoneNumber,
      providerId: event.providerData[0].providerId,
    };
    this.store.dispatch(new LoginSuccessAction(user));
  }
}
