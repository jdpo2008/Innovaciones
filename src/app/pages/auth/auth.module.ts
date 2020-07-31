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
    NgxAuthFirebaseUIModule,
  ],
})
export class AuthModule {}
