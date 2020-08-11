import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AuthFirebaseUIConfig } from "../interfaces";
import { AuthProcessService } from "../services/auth-sync.service";
import { Config } from "../interfaces/config.interface";

@Injectable({
  providedIn: "root",
})
export class LoggedInGuard implements CanActivate {
  config: AuthFirebaseUIConfig;
  constructor(private router: Router, private authProcess: AuthProcessService) {
    this.config = Config;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authProcess.afa.user.pipe(
      map((user) => {
        if (user) {
          if (
            this.config.guardProtectedRoutesUntilEmailIsVerified &&
            !user.emailVerified
          ) {
            if (this.config.authGuardFallbackURL) {
              this.router.navigate([`${this.config.authGuardFallbackURL}`]);
            }
            this.authProcess.showSweetAlert(
              "info",
              "Lo Sentimos",
              `Debes confirmar tu correo electronico ${user.email}`
            );
            return false;
          } else {
            return true;
          }
        } else {
          if (this.config.authGuardFallbackURL) {
            this.router.navigate([`${this.config.authGuardFallbackURL}`]);
          }
          return false;
        }
      })
    );
  }
}
