import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [CarouselComponent],
  imports: [
      CommonModule,
      LayoutModule
  ],
  exports: [
      LayoutModule, CarouselComponent
  ]
})

export class ComponentsModule { }
