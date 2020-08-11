import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { ComponentsModule } from "../components/components.module";
import { AngularMaterialModule } from "../angular-material.module";

import { PagesComponent } from "./pages.component";

import { HomeComponent } from "./home/home.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ConsultaComponent } from "./consulta/consulta.component";
import { LoggedInGuard } from "../guards/logged-in.guard";
import { FlexLayoutModule } from "@angular/flex-layout";

const routes: Routes = [
  {
    path: "index",
    component: HomeComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "contacto",
    component: ContactComponent,
  },
  {
    path: "consulta",
    component: ConsultaComponent,
    canActivate: [LoggedInGuard],
  },
  {
    path: "**",
    component: NotfoundComponent,
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    NotfoundComponent,
    PagesComponent,
    AboutComponent,
    ContactComponent,
    ConsultaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    FlexLayoutModule,
  ],
  providers: [LoggedInGuard],
})
export class PagesModule {}
