import { Component, ViewChild, ElementRef } from '@angular/core';


interface MenuItem{
  texto:string;
  ruta:string
}


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor() { }

  isActive : boolean = false;


  toogleMenu(){
    this.isActive = !this.isActive;
  }

  menuItem:MenuItem[]=[
    {
      texto:'Sobre mi',
      ruta:'/about'
    },
    {
      texto:'Proyectos',
      ruta:'/projects'
    },
    {
      texto:'Contacto',
      ruta:'/contact'
    },
  ]

}
