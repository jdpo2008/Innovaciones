import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { User } from "firebase";
import { Store } from "@ngrx/store";
import { AuthProcessService, FirestoreSyncService } from "ngx-auth-firebaseui";
import { MatFormFieldAppearance } from "@angular/material/form-field";
import { AppState } from "../../redux/app.store";
import { AlertService } from "../../services/alert.service";
import {
  LogOutSuccessAction,
  LogOutErrorAction,
} from "../../pages/auth/auth.actions";

export const EMAIL_REGEX = new RegExp(
  [
    '^(([^<>()[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)',
    '|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.',
    "[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+",
    "[a-zA-Z]{2,}))$",
  ].join("")
);

// tslint:disable-next-line:max-line-length
export const PHONE_NUMBER_REGEX = new RegExp(
  [
    "^[+]{0,1}[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\.]{0,1}[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]{4,12}$",
  ].join("")
);

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styles: [],
})
export class UserProfileComponent implements OnInit {
  @Input()
  editMode: boolean;
  @Input()
  canLogout = true;
  @Input()
  canEditAccount = true;
  @Input()
  canDeleteAccount = true;
  @Input()
  appearance: MatFormFieldAppearance;

  @Output()
  onSignOut: EventEmitter<void> = new EventEmitter();
  @Output()
  onAccountEdited: EventEmitter<void> = new EventEmitter();
  @Output()
  onAccountDeleted: EventEmitter<void> = new EventEmitter();

  updateFormGroup: FormGroup;
  updateNameFormControl: FormControl;
  updateEmailFormControl: FormControl;
  updatePhoneNumberFormControl: FormControl;
  updatePasswordFormControl: FormControl;

  constructor(
    public authProcess: AuthProcessService,
    private fireStoreService: FirestoreSyncService,
    private store: Store<AppState>,
    private _alertaService: AlertService
  ) {}

  ngOnInit(): void {
    console.log(this.authProcess.user);
  }

  changeEditMode() {
    this.editMode = !this.editMode;

    this.editMode ? this.initUpdateFormGroup() : this.reset();
  }

  reset() {
    this.updateFormGroup.reset();
    this.updateFormGroup.disable();
    this.updateFormGroup = null;
  }

  async save() {
    if (this.updateFormGroup.dirty) {
      const user = this.authProcess.user;

      const snackBarMsg: string[] = [];

      try {
        if (this.updateNameFormControl.dirty) {
          await user.updateProfile({
            displayName: this.updateNameFormControl.value,
          });
          snackBarMsg.push(
            `Tu Nombre ha sido actualizado correctamente ${user.displayName}`
          );
        }

        if (this.updateEmailFormControl.dirty) {
          await user.updateEmail(this.updateEmailFormControl.value);
          snackBarMsg.push(
            `Tu email ha sido actualizado correctamente ${user.email}`
          );
        }

        if (this.updatePhoneNumberFormControl.dirty) {
          await user.updatePhoneNumber(this.updatePhoneNumberFormControl.value);
          console.log(
            "phone number = ",
            this.updatePhoneNumberFormControl.value
          );
          snackBarMsg.push(
            `Tu Telefono ha sido actualizado correctamente ${user.phoneNumber}`
          );
        }
        await this.fireStoreService.updateUserData(
          this.authProcess.parseUserInfo(user)
        );
      } catch (error) {
        this._alertaService.setMensaje("error", "OPS!", error.message, 5000);
      }

      if (snackBarMsg.length > 0) {
        // this.authProcess.showToast(snackBarMsg.join("\\n"));
        this._alertaService.setMensaje(
          "success",
          "Gracias!",
          snackBarMsg.join("\\n"),
          5000
        );
      }

      this.updateFormGroup.reset();
    }

    this.editMode = false;
  }

  async signOut() {
    try {
      this.onSignOut.emit();
      await this.authProcess.afa.signOut();
      this.store.dispatch(new LogOutSuccessAction());
      this._alertaService.setMensaje(
        "success",
        "Gracias!",
        "Esperamos puedas volver pronto",
        5000
      );
    } catch (e) {
      this.store.dispatch(new LogOutErrorAction(e));
      this._alertaService.setMensaje("error", "OPS!", e.message, 5000);
    }
  }
  async deleteAccount() {
    try {
      const user = this.authProcess.user;
      //await this.authProcess.deleteAccount();
      await this.authProcess.user.delete();
      // if (this.config.enableFirestoreSync) {
      await this.fireStoreService.deleteUserData(user.uid);
      // }
      this.onAccountDeleted.emit();
      this.editMode = false;
      this._alertaService.setMensaje(
        "success",
        "Información!",
        "La cuenta fue eliminada correctamente",
        5000
      );
    } catch (error) {
      this._alertaService.setMensaje("error", "OPS!", error.message, 5000);
    }
  }

  protected initUpdateFormGroup() {
    const currentUser: User = this.authProcess.user;
    this.updateFormGroup = new FormGroup({
      name: this.updateNameFormControl = new FormControl(
        { value: currentUser.displayName, disabled: this.editMode },
        [Validators.required, Validators.minLength(2), Validators.maxLength(50)]
      ),

      email: this.updateEmailFormControl = new FormControl(
        { value: currentUser.email, disabled: this.editMode },
        [Validators.required, Validators.pattern(EMAIL_REGEX)]
      ),

      password: this.updatePasswordFormControl = new FormControl(
        { value: "", disabled: this.editMode },
        [Validators.required, Validators.minLength(8), Validators.maxLength(12)]
      ),

      phoneNumber: this.updatePhoneNumberFormControl = new FormControl(
        { value: currentUser.phoneNumber, disabled: this.editMode },
        [Validators.pattern(PHONE_NUMBER_REGEX)]
      ),
    });

    this.updateFormGroup.enable();
  }
}
