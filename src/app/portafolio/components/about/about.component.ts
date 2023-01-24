import { Component, OnInit } from '@angular/core';
import { Imagen } from '../../interfaces/imagen';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  {

  constructor() { }

  certificados:Imagen[] = [
    {path:'../../../../assets/AngularCertificado.jpg', nombre:'Angular'},
    {path:'../../../assets/reactCertificado.jpg', nombre:'React'},
    {path:'../../../assets/UXcertificado.jpg', nombre:'UX/UI'}
  ]

}
