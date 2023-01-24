import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortafolioRoutingModule } from './portafolio-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProyectosComponent
  ],
  imports: [
    CommonModule,
    PortafolioRoutingModule,
    SharedModule
  ]
})
export class PortafolioModule { }
