import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { NgxAuthFirebaseUIModule } from "ngx-auth-firebaseui";

import { MatCardModule } from "@angular/material/card";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { environment } from "../../../environments/environment";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild(routes),
    NgxAuthFirebaseUIModule.forRoot(
      environment.firebaseConfig,
      () => "angular-app",
      {
        enableFirestoreSync: true, // enable/disable autosync users with firestore
        toastMessageOnAuthSuccess: true, // whether to open/show a snackbar message on auth success - default : true
        toastMessageOnAuthError: true, // whether to open/show a snackbar message on auth error - default : true
        authGuardFallbackURL: "pages/index", // url for unauthenticated users - to use in combination with canActivate feature on a route
        authGuardLoggedInURL: "auth/login", // url for authenticated users - to use in combination with canActivate feature on a route
        passwordMaxLength: 12, // `min/max` input parameters in components should be within this range.
        passwordMinLength: 8, // Password length min/max in forms independently of each componenet min/max.
        // Same as password but for the name
        nameMaxLength: 25,
        nameMinLength: 2,
        // If set, sign-in/up form is not available until email has been verified.
        // Plus protected routes are still protected even though user is connected.
        guardProtectedRoutesUntilEmailIsVerified: true,
        enableEmailVerification: true, // default: true
      }
    ),
  ],
})
export class AuthModule {}
