// Angular Core
import { environment } from "./../../environments/environment.prod";
import { NgModule, ApplicationRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CwdjParallaxModule } from "cwdj-parallax";

//Angular Material
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatProgressBarModule } from "@angular/material/progress-bar";

//Maps Module
import { AgmCoreModule } from "@agm/core";

import { FlexLayoutModule } from "@angular/flex-layout";

// APP Imports
import { CarouselComponent } from "./carousel/carousel.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { MessagesComponent } from "./messages/messages.component";
import { PagosComponent } from "./pagos/pagos.component";
import { ImgCardComponent } from "./img-card/img-card.component";
import { MapsComponent } from "./maps/maps.component";
import { ParallaxComponent } from "./parallax/parallax.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";

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
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatTableModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    FormsModule,
    CwdjParallaxModule,
    AgmCoreModule.forRoot({
      apiKey: environment.maps_key,
    }),
  ],
  exports: [
    CarouselComponent,
    ContactFormComponent,
    MessagesComponent,
    PagosComponent,
    ImgCardComponent,
    MapsComponent,
    ParallaxComponent,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatTableModule,
    AgmCoreModule,
    CwdjParallaxModule,
  ],
})
export class ComponentsModule {}
