import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { RouterModule, Routes } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MatTabsModule } from "@angular/material/tabs";

import { ComponentsModule } from "../components/components.module";

import { PagesComponent } from "./pages.component";

import { HomeComponent } from "./home/home.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { UserService } from "../services/user.service";
import { ConsultaComponent } from "./consulta/consulta.component";

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
    NgbModule,
    FormsModule,
    MatTabsModule,
  ],
  providers: [UserService],
})
export class PagesModule {}
