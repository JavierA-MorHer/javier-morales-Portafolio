import { Component, OnInit } from '@angular/core';
import { Imagen, Proyectos } from '../../interfaces/imagen';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent {
  constructor() {}

  proyectos: Proyectos[] = [
    {
      path: '../../../../assets/proyectos/mapas.png',
      descripcion: 'Aplicación de mapas hecha con Angular donde te permitira buscar lugares cercanos a ti y podrás trazas la ruta mas cercana. Utilizando Mapboxgl.',
      alt:'mapas',
      link: 'https://mapas-angular-bonus.netlify.app',
      repositorio:'https://github.com/JavierA-MorHer/mapas2daParte'
    },
    { 
      path: '../../../../assets/proyectos/gastos.png', 
      descripcion: 'Aplicación hecha con React. Un planificador de gastos donde podrás establecer un presupuesto e ir anotando los gastos.',
      alt:'gastos',
      link:'https://manejadordegastosreact.netlify.app/',
      repositorio:'https://github.com/JavierA-MorHer/Control_de_Gastos_App'
    },
    { 
      path: '../../../../assets/proyectos/ipApp.png', 
      descripcion: 'Aplicación hecha con React, utilizando la IP Geolocation API (https://geo.ipify.org/) y para el mapa usé Leaflet (https://leafletjs.com/), permite buscar ubicaciones mediante direcciones IPV4 o IPV6 ',
      alt:'ipApp',
      link:'https://ipaddressappreact.netlify.app',
      repositorio:'https://github.com/JavierA-MorHer/Ip_address_track_app'
    },
    { 
      path: '../../../../assets/proyectos/tip.png', 
      descripcion: 'Aplicación hecha con React, calculadora de propinas.',
      alt:'tip',
      link:'https://mytipcalculatorapp.netlify.app/' ,
      repositorio:'https://github.com/JavierA-MorHer/TipCalculator'
    },
    { 
      path: '../../../../assets/proyectos/windbnb.png', 
      descripcion: 'Aplicación hecha con React, un clon de AirBnb que permite filtrar habitaciones por lugar y por numero de personas a hospedar.',
      alt:'windbnb',
      link:'https://windbnbappreact.netlify.app/',
      repositorio:'https://github.com/JavierA-MorHer/WindbnbByJavier'
    },
    { 
      path: '../../../../assets/proyectos/advice.png', 
      descripcion: 'Hecha con Javascript puro, HTML y CSS, cada que presionas el dado te genera un nuevo consejo.',
      alt:'advice',
      link:'https://advicegeneratorappjs.netlify.app/',
      repositorio:'https://github.com/JavierA-MorHer/AdviceGenerator'
    },
    { 
      path: '../../../../assets/proyectos/rate.png', 
      descripcion: 'Hecha con Javascript puro, HTML y CSS, un componente que permite calificar un servicio en un rango de 1 a 5.',
      alt:'rate',
      link:'https://ratingcomponentjs.netlify.app/',
      repositorio:'https://github.com/JavierA-MorHer/Interactive-rating-component'
    },
    { 
      path: '../../../../assets/proyectos/gifApp.png', 
      descripcion: 'Hecha con Angular consumiendo la api de Giphy (https://giphy.com/), permite realizar busquedas y guardar el historial de las mismas.',
      alt:'gifApp',
      link:'https://myangulargifapp.netlify.app/',
      repositorio:'https://github.com/JavierA-MorHer/Angular-gifsApp'
    },
  ];
}
