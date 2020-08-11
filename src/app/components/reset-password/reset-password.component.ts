import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  AbstractControl,
  Validators,
  FormControl,
} from "@angular/forms";

import { AngularFireAuth } from "@angular/fire/auth";
import { AuthProcessService } from "../../services/auth-sync.service";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styles: [],
})
export class ResetPasswordComponent implements OnInit {
  passReset: Boolean;
  isLoading: Boolean;
  public resetPasswordFormGroup: FormGroup;

  resetPasswordFormControl: AbstractControl;
  resetConfirmPasswordFormControl: AbstractControl;
  constructor(
    public authProcess: AuthProcessService,
    public auth: AngularFireAuth
  ) {}

  ngOnInit(): void {
    this._initResetPasswordFormGroupBuilder();
  }

  changePassword() {
    this.authProcess.user
      .updatePassword(this.resetPasswordFormControl.value)
      .then(() => {
        this.isLoading = false;
        this.authProcess.showSweetAlert(
          "success",
          "Satisfactorio",
          "La Contraseña fue cambiada de manera exitosa"
        );
      })
      .catch((err) => console.log(err));
  }

  private _initResetPasswordFormGroupBuilder() {
    this.resetPasswordFormGroup = new FormGroup(
      {
        password: this.resetPasswordFormControl = new FormControl("", [
          Validators.required,
        ]),
        confirmPassword: this.resetConfirmPasswordFormControl = new FormControl(
          "",
          [Validators.required]
        ),
      },
      this.pwdMatchValidator
    );
  }

  private pwdMatchValidator(frm: FormGroup) {
    return frm.get("password").value === frm.get("confirmPassword").value
      ? null
      : { mismatch: true };
  }
}
