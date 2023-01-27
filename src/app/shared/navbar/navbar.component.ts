import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter} from 'rxjs';


interface MenuItem{
  texto:string;
  ruta:string
}


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isActive : boolean = false;
  
  constructor( private router:Router ) { }

  ngOnInit(): void {
    //If route changes, set isActive in false to close menu
    this.router.events
      .pipe(
        filter( e => e instanceof NavigationEnd )
      ).subscribe( e => {
            if( e ){
              this.isActive = false;
            }
      });
  }

  toogleMenu(){
    this.isActive = !this.isActive;
  }

  menuItem:MenuItem[]=[
    {
      texto:'About me',
      ruta:'/about'
    },
    {
      texto:'Projects',
      ruta:'/projects'
    },
    {
      texto:'Contact',
      ruta:'/contact'
    },
  ]

}
