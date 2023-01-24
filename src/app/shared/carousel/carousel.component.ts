import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface Image{
  path:string;
  text:string;
}


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {


  frontend:Image[] = [
    {path: '../../../assets/html5Logo.png', text:'Html 5'},
    {path: '../../../assets/cssLogo.png', text:'Css3'},
    {path: '../../../assets/jsLogo.png', text:'Javascript'},
    {path: '../../../assets/angularLogo.png', text:'Angular'},
    {path: '../../../assets/reactLogo.png', text:'ReactJs'},
    {path: '../../../assets/bootsLogo.png', text:'Bootstrap'},

]

  fullstack:Image[] =[
    {path: '../../../assets/laravelLogo.png', text:'Laravel'},
  ]

  database:Image[]=[
    {path: '../../../assets/sqlServerLogo.png', text:'SqlServer'},
    {path: '../../../assets/mongoLogo.png', text:'MongoDB'},
  ]

  backend:Image[]=[
    {path: '../../../assets/nodeLogo.png', text:'NodeJs'},
    {path: '../../../assets/expressLogo.png', text:'Express'},

  ]

  herramientas:Image[]=[
    {path: '../../../assets/gitLogo.png', text:'Git'},
    {path: '../../../assets/sourceLogo.png', text:'SourceTree'},

  ]

  constructor() { }

  ngOnInit(): void {

    
  }

}
