import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";

//Angular Material
import { AngularMaterialModule } from "../../angular-material.module";

//Angular Firebase Module
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

// Variables de Entorno
import { environment } from "../../../environments/environment";

//Componentes APP
import { ProvidersComponent } from "./providers/providers.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { RegisterFormComponent } from "./register-form/register-form.component";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { AuthProcessService } from "../../services/auth-sync.service";

@NgModule({
  declarations: [LoginFormComponent, RegisterFormComponent, ProvidersComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularMaterialModule,
  ],
  exports: [
    LoginFormComponent,
    RegisterFormComponent,
    ProvidersComponent,
    AngularFireModule,
    FlexLayoutModule,
    AngularFirestoreModule,
  ],
})
export class AuthUiModule {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    auth: AuthProcessService
  ) {
    auth.listenToUserEvents();
    this.registerProviderIcons();
  }

  registerProviderIcons() {
    this.iconRegistry
      .addSvgIcon(
        "google",
        this.sanitizer.bypassSecurityTrustResourceUrl(
          "/assets/images/mdi/google.svg"
        )
      )
      .addSvgIcon(
        "apple",
        this.sanitizer.bypassSecurityTrustResourceUrl(
          "/assets/images/mdi/apple.svg"
        )
      )
      .addSvgIcon(
        "google-colored",
        this.sanitizer.bypassSecurityTrustResourceUrl(
          "/assets/images/google.svg"
        )
      )
      .addSvgIcon(
        "facebook",
        this.sanitizer.bypassSecurityTrustResourceUrl(
          "/assets/images/facebook.svg"
        )
      )
      .addSvgIcon(
        "twitter",
        this.sanitizer.bypassSecurityTrustResourceUrl(
          "/assets/images/mdi/twitter.svg"
        )
      )
      .addSvgIcon(
        "github",
        this.sanitizer.bypassSecurityTrustResourceUrl(
          "/assets/images/mdi/github-circle.svg"
        )
      )
      .addSvgIcon(
        "microsoft",
        this.sanitizer.bypassSecurityTrustResourceUrl(
          "/assets/images/mdi/microsoft.svg"
        )
      )
      .addSvgIcon(
        "yahoo",
        this.sanitizer.bypassSecurityTrustResourceUrl(
          "/assets/images/mdi/yahoo.svg"
        )
      )
      .addSvgIcon(
        "phone",
        this.sanitizer.bypassSecurityTrustResourceUrl(
          "/assets/images/phone.svg"
        )
      );
  }
}
