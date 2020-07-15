import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { RouterModule, Routes } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { ComponentsModule } from "../components/components.module";

import { PagesComponent } from "./pages.component";

import { HomeComponent } from "./home/home.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";

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
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    NgbModule,
    FormsModule,
  ],
})
export class PagesModule {}
