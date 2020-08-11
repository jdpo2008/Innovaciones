import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { User } from "firebase";
import { Store } from "@ngrx/store";
import { UserProfileComponent } from "../../user-profile/user-profile.component";
import { ResetPasswordComponent } from "../../reset-password/reset-password.component";
import { AlertService } from "../../../services/alert.service";
import { AppState } from "../../../redux/app.store";
import {
  LogOutSuccessAction,
  AuthError,
} from "../../../pages/auth/auth.actions";
import { AuthProcessService } from "../../../services/auth-sync.service";

@Component({
  selector: "app-avatar",
  templateUrl: "./avatar.component.html",
  styleUrls: ["./avatar.component.css"],
})
export class AvatarComponent implements OnInit {
  @Input()
  layout: "default" | "simple" = "default";
  @Input()
  canLogout = true;
  @Input()
  canViewAccount = true;
  @Input()
  canDeleteAccount = true;
  @Input()
  canEditAccount = true;
  @Input()
  canChangePassword = true;
  @Input()
  textProfile = "Profile";
  @Input()
  textSignOut = "Sign Out";

  @Output()
  onSignOut: EventEmitter<void> = new EventEmitter();

  user: User;
  displayNameInitials: string | null;
  token: String = null;
  links: [];
  constructor(
    public authProcess: AuthProcessService,
    public dialog: MatDialog,
    private _alertaService: AlertService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.authProcess.afa.authState.subscribe((res) => {
      this.user = res;
      this.displayNameInitials = this.user
        ? this.getDisplayNameInitials(this.user.displayName)
        : null;
      if (res && res.uid) {
        console.log("user logged in", res);
      } else {
        console.log("user not logged in");
      }
    });
  }
  getDisplayNameInitials(displayName: string | null): string | null {
    if (!displayName) {
      return null;
    }
    const initialsRegExp: RegExpMatchArray = displayName.match(/\b\w/g) || [];
    const initials = (
      (initialsRegExp.shift() || "") + (initialsRegExp.pop() || "")
    ).toUpperCase();
    return initials;
  }

  openProfile() {
    const dialogRef = this.dialog.open(UserProfileComponent);
    const instance = dialogRef.componentInstance;
    instance.canDeleteAccount = this.canDeleteAccount;
    instance.canEditAccount = this.canEditAccount;
  }

  changePassword() {
    const dialogRef = this.dialog.open(ResetPasswordComponent);
    const instance = dialogRef.componentInstance;
    //instance.canChangePassword = this.canChangePassword;
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
      // An error happened.
      console.error("An error happened while signing out!", e);
      this.store.dispatch(new AuthError(e));
      this._alertaService.setMensaje("error", "OPS!", e.message, 5000);
    }
  }
}
