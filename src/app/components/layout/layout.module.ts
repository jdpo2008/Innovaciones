import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { RouterModule } from "@angular/router";
import { NgxAuthFirebaseUIModule } from "ngx-auth-firebaseui";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { MatTooltipModule } from "@angular/material/tooltip";

import { ComponentsModule } from "../components.module";
// Components
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { AvatarComponent } from "./avatar/avatar.component";
import { UserProfileComponent } from "../user-profile/user-profile.component";
import { ResetPasswordComponent } from "../reset-password/reset-password.component";

@NgModule({
  declarations: [NavbarComponent, FooterComponent, AvatarComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgxAuthFirebaseUIModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatTooltipModule,
    FlexLayoutModule,
    ComponentsModule,
  ],
  exports: [NavbarComponent, FooterComponent],
  entryComponents: [UserProfileComponent, ResetPasswordComponent],
})
export class LayoutModule {}
