import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserInfo, FirebaseError } from "firebase/app";
import { Store } from "@ngrx/store";
import { AppState } from "../../../redux/app.store";
import { LoginSuccessAction, LoginErrorAction } from "../auth.actions";
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
    this._alertaService.setMensaje(
      "success",
      "Hola!",
      `Bienvenido ${event.displayName}`,
      4000
    );
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

  onError(event) {
    const error: FirebaseError = {
      code: event.code,
      message: this.FirebaseError(event),
      name: "Error en Ingreso",
    };

    this._alertaService.setMensaje(
      "error",
      "OPS!",
      this.FirebaseError(event),
      5000
    );

    this.store.dispatch(new LoginErrorAction(error));
  }

  onStrengthChanged(event) {}

  public FirebaseError(error: FirebaseError): string {
    this.accountErrorMessage = "";
    switch (error.code) {
      case "auth/invalid-email": {
        this.accountErrorMessage = "El email o la contraseña no son correctos.";
        break;
      }
      case "auth/wrong-password": {
        this.accountErrorMessage = "El email o la contraseña no son correctos.";
        break;
      }
      case "auth/user-not-found": {
        this.accountErrorMessage =
          "El usuario no se encuentra registrado o es incorrecto.";
        break;
      }
      default: {
        this.accountErrorMessage =
          "Error al intentar ingresar en la aplicación. Intenta nuevamente";
        break;
      }
    }
    return this.accountErrorMessage;
  }
}
