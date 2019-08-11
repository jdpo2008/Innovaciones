import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CarouselComponent, ContactFormComponent],
  imports: [
      CommonModule,
      LayoutModule,
      MatInputModule,
      MatButtonModule,
      MatSelectModule,
      MatRadioModule,
      MatCardModule,
      ReactiveFormsModule
  ],
  exports: [
      LayoutModule, CarouselComponent, ContactFormComponent
  ]
})

export class ComponentsModule { }
