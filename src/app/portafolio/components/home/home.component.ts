import { Component, OnInit } from '@angular/core';
import { Imagen } from '../../interfaces/imagen';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images:Imagen[] = [
    {path: '../../../assets/angularLogo.png'},
    {path: '../../../assets/reactLogo.png'},
    {path: '../../../assets/laravelLogo.png'},
    {path: '../../../assets/nodeLogo.png'},
    {path: '../../../assets/expressLogo.png'},
    {path: '../../../assets/mongoLogo.png'},
    {path: '../../../assets/sqlServerLogo.png'},
]

}
