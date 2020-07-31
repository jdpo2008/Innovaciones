import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { RouterModule, Routes } from "@angular/router";

//Material
import { MatFabMenuModule } from "@angular-material-extensions/fab-menu";

//Redux
import { StoreModule } from "@ngrx/store";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { appReducers } from "./redux/app.store";

//Angular Firebase Module
import { NgxAuthFirebaseUIModule } from "ngx-auth-firebaseui";

// Modulos Aplicacion
import { ComponentsModule } from "./components/components.module";
import { LayoutModule } from "./components/layout/layout.module";

// Servicios
import { DominioService } from "./services/dominio.service";
import { AlertService } from "./services/alert.service";

// Main Component
import { AppComponent } from "./app.component";
import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

const appRoutes: Routes = [
  {
    path: "pages",
    loadChildren: () =>
      import("./pages/pages.module").then((m) => m.PagesModule),
  },
  {
    path: "services",
    loadChildren: () =>
      import("./pages/services/services.module").then((m) => m.ServicesModule),
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./pages/auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "**",
    redirectTo: "pages/index",
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    LayoutModule,
    ComponentsModule,
    StoreModule.forRoot(appReducers),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    SweetAlert2Module.forRoot(),
    RouterModule.forRoot(appRoutes, { useHash: true }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    NgxAuthFirebaseUIModule.forRoot(
      environment.firebaseConfig,
      () => "angular-app",
      {
        enableFirestoreSync: true, // enable/disable autosync users with firestore
        toastMessageOnAuthSuccess: false, // whether to open/show a snackbar message on auth success - default : true
        toastMessageOnAuthError: false, // whether to open/show a snackbar message on auth error - default : true
        authGuardFallbackURL: "/auth/login", // url for unauthenticated users - to use in combination with canActivate feature on a route
        authGuardLoggedInURL: "/pages/index", // url for authenticated users - to use in combination with canActivate feature on a route
        passwordMaxLength: 12, // `min/max` input parameters in components should be within this range.
        passwordMinLength: 8, // Password length min/max in forms independently of each componenet min/max.
        nameMaxLength: 50,
        nameMinLength: 2,
        guardProtectedRoutesUntilEmailIsVerified: true,
        enableEmailVerification: true, // default: true
      }
    ),
    MatFabMenuModule,
  ],
  providers: [DominioService, AlertService],
  bootstrap: [AppComponent],
})
export class AppModule {}
