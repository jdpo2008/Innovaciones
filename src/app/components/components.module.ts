// Angular Core
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CwdjParallaxModule } from "cwdj-parallax";
import { environment } from "./../../environments/environment.prod";

//Angular Material
import { AngularMaterialModule } from "../angular-material.module";

//Maps Module
import { AgmCoreModule } from "@agm/core";

//Flex Layout Module
import { FlexLayoutModule } from "@angular/flex-layout";

//APP Imports
import { CarouselComponent } from "./carousel/carousel.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { MessagesComponent } from "./messages/messages.component";
import { PagosComponent } from "./pagos/pagos.component";
import { ImgCardComponent } from "./img-card/img-card.component";
import { MapsComponent } from "./maps/maps.component";
import { ParallaxComponent } from "./parallax/parallax.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { AuthUiModule } from "./auth-ui/auth-ui.module";

@NgModule({
  declarations: [
    CarouselComponent,
    ContactFormComponent,
    MessagesComponent,
    PagosComponent,
    ImgCardComponent,
    MapsComponent,
    ParallaxComponent,
    UserProfileComponent,
    ResetPasswordComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    CwdjParallaxModule,
    AgmCoreModule.forRoot({
      apiKey: environment.maps_key,
    }),
    AuthUiModule,
    AngularMaterialModule,
  ],
  exports: [
    CarouselComponent,
    ContactFormComponent,
    MessagesComponent,
    PagosComponent,
    ImgCardComponent,
    MapsComponent,
    ParallaxComponent,
    AgmCoreModule,
    CwdjParallaxModule,
    AuthUiModule,
  ],
})
export class ComponentsModule {}
