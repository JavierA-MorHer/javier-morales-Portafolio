import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'', component:HomeComponent},
      {path:'about', component:AboutComponent},
      {path:'contact', component:ContactComponent},
      {path:'projects', component:ProyectosComponent},
      {path:'**', redirectTo:''},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortafolioRoutingModule { }
