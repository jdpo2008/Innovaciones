import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";

//Material
import { AngularMaterialModule } from "../../angular-material.module";

// Modulos APP
import { ComponentsModule } from "../components.module";

// Components
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { AvatarComponent } from "./avatar/avatar.component";
import { UserProfileComponent } from "../user-profile/user-profile.component";
import { ResetPasswordComponent } from "../reset-password/reset-password.component";
import { MobileNavComponent } from "./mobile-nav/mobile-nav.component";

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    AvatarComponent,
    MobileNavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    ComponentsModule,
  ],
  exports: [NavbarComponent, FooterComponent, MobileNavComponent],
  entryComponents: [UserProfileComponent, ResetPasswordComponent],
})
export class LayoutModule {}
