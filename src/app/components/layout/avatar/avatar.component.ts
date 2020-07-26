import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import { AuthProcessService } from "ngx-auth-firebaseui";
import { User } from "firebase";

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
  textProfile = "Profile";
  @Input()
  textSignOut = "Sign Out";

  @Output()
  onSignOut: EventEmitter<void> = new EventEmitter();

  user: User;
  displayNameInitials: string | null;
  constructor(public authProcess: AuthProcessService) {}

  ngOnInit(): void {
    this.authProcess.afa.authState.subscribe((res) => {
      this.user = res;
      this.displayNameInitials = this.user
        ? this.getDisplayNameInitials(this.user.displayName)
        : null;
      if (res && res.uid) {
        console.log("user is logged in", res);
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
    // const dialogRef = this.dialog.open(UserComponent);
    // const instance = dialogRef.componentInstance;
    // instance.canDeleteAccount = this.canDeleteAccount;
    // instance.canEditAccount = this.canEditAccount;
  }

  async signOut() {
    try {
      await this.authProcess.afa.signOut();
      // Sign-out successful.
      this.onSignOut.emit();
    } catch (e) {
      // An error happened.
      console.error("An error happened while signing out!", e);
    }
  }
}
