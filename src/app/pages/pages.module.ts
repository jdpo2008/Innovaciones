import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from "../components/layout/layout.module";
import { RouterModule } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [ HomeComponent, NotfoundComponent, PagesComponent ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    NgbModule
  ],
  exports: [ NgbModule, HomeComponent, NotfoundComponent, PagesComponent ]
})
export class PagesModule { }
