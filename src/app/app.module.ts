import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

// Modulos Aplicacion
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { LayoutModule } from '@angular/cdk/layout';

// Servicios
import { DominioService } from './services/dominio.service';
import { AlertService } from './services/alert.service';

// Main Component
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PagesModule,
    LayoutModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [ DominioService, AlertService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
