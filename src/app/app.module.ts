import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { RouterModule, Routes } from "@angular/router";

//NGX-Spinner
import { NgxSpinnerModule } from "ngx-spinner";

//Material
import { AngularMaterialModule } from "./angular-material.module";

//Redux
import { StoreModule } from "@ngrx/store";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { appReducers } from "./redux/app.store";

// Modulos Aplicacion
import { ComponentsModule } from "./components/components.module";
import { LayoutModule } from "./components/layout/layout.module";

// Servicios
import { AlertService } from "./services/alert.service";
import { DominioService } from "./services/dominio.service";
import { AuthProcessService } from "./services/auth-sync.service";

// Main Component
import { AppComponent } from "./app.component";
import { environment } from "../environments/environment";
import { LoggedInGuard } from "./guards/logged-in.guard";

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
    NgxSpinnerModule,
    StoreModule.forRoot(appReducers),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    SweetAlert2Module.forRoot(),
    RouterModule.forRoot(appRoutes, { useHash: true }),
    NgxSpinnerModule,
    AngularMaterialModule,
  ],
  providers: [AuthProcessService, DominioService, AlertService, LoggedInGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
