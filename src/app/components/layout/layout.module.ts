import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgxAuthFirebaseUIModule } from "ngx-auth-firebaseui";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { MatTooltipModule } from "@angular/material/tooltip";

// Components
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { AvatarComponent } from "./avatar/avatar.component";

@NgModule({
  declarations: [NavbarComponent, FooterComponent, AvatarComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxAuthFirebaseUIModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatTooltipModule,
    FlexLayoutModule,
  ],
  exports: [NavbarComponent, FooterComponent],
})
export class LayoutModule {}
