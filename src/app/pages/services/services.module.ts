import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ServiceWebComponent } from "./service-web/services-web.component";
import { ServiceExtraComponent } from "./service-extra/service-extra.component";
import { ServiceHostingComponent } from "./service-hosting/service-hosting.component";
import { ComponentsModule } from "../../components/components.module";

const routes: Routes = [
  {
    path: "web",
    component: ServiceWebComponent,
  },
  {
    path: "hosting",
    component: ServiceHostingComponent,
  },
  {
    path: "extras",
    component: ServiceExtraComponent,
  },
];

@NgModule({
  declarations: [
    ServiceWebComponent,
    ServiceHostingComponent,
    ServiceExtraComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    RouterModule.forChild(routes),
  ],
})
export class ServicesModule {}
