import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
import { PagosComponent } from './pagos/pagos.component';

@NgModule({
  declarations: [CarouselComponent, ContactFormComponent, MessagesComponent, PagosComponent],
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
      ReactiveFormsModule
  ],
  exports: [
      LayoutModule,
      CarouselComponent,
      ContactFormComponent,
      MessagesComponent,
      PagosComponent,
      MatInputModule,
      MatIconModule,
      MatButtonModule,
      MatSelectModule,
      MatRadioModule,
      MatCardModule,
      MatTableModule
  ]
})

export class ComponentsModule { }
