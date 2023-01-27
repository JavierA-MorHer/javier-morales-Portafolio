import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { ToTopComponent } from './to-top/to-top.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    ToTopComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    ToTopComponent
  ]
})
export class SharedModule { }
