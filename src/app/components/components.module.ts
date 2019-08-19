import { NgModule, ApplicationRef  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CwdjParallaxModule } from 'cwdj-parallax';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { AgmCoreModule } from '@agm/core';

import { LayoutModule } from './layout/layout.module';

import { CarouselComponent } from './carousel/carousel.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { MessagesComponent } from './messages/messages.component';
import { PagosComponent } from './pagos/pagos.component';
import { ImgCardComponent } from './img-card/img-card.component';
import { MapsComponent } from './maps/maps.component';
import { ParallaxComponent } from './parallax/parallax.component';

@NgModule({
  declarations: [
    CarouselComponent,
    ContactFormComponent,
    MessagesComponent,
    PagosComponent,
    ImgCardComponent,
    MapsComponent,
    ParallaxComponent
  ],
  imports: [
      CommonModule,
      LayoutModule,
      MatInputModule,
      MatIconModule,
      MatButtonModule,
      MatSelectModule,
      MatRadioModule,
      MatCardModule,
      MatTableModule,
      ReactiveFormsModule,
      CwdjParallaxModule,
      AgmCoreModule.forRoot({
        apiKey: 'AIzaSyBsUtIuHTuTOc4LGcaL0dDv1-GunKTIMR4'
      })
  ],
  exports: [
      LayoutModule,
      CarouselComponent,
      ContactFormComponent,
      MessagesComponent,
      PagosComponent,
      ImgCardComponent,
      MapsComponent,
      ParallaxComponent,
      MatInputModule,
      MatIconModule,
      MatButtonModule,
      MatSelectModule,
      MatRadioModule,
      MatCardModule,
      MatTableModule,
      AgmCoreModule,
      CwdjParallaxModule
  ]
})

export class ComponentsModule { }
