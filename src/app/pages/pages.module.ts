import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutModule } from '../components/layout/layout.module';
import { ComponentsModule } from '../components/components.module';

import { PagesComponent } from './pages.component';

import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';
import { ServiceWebComponent } from './services/service-web/services-web.component';
import { ServiceHostingComponent } from './services/service-hosting/service-hosting.component';

@NgModule({
  declarations: [
    HomeComponent,
    NotfoundComponent,
    PagesComponent,
    AboutComponent,
    ServiceWebComponent,
    ServiceHostingComponent ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    ComponentsModule,
    NgbModule
  ],
  exports: [
    ComponentsModule,
    NgbModule,
    HomeComponent,
    NotfoundComponent,
    PagesComponent,
    AboutComponent,
    ServiceWebComponent,
    ServiceHostingComponent
  ]
})
export class PagesModule { }
