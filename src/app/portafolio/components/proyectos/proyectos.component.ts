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
      //descripcion: 'Aplicación de mapas hecha con Angular donde te permitira buscar lugares cercanos a ti y podrás trazas la ruta mas cercana. Utilizando Mapboxgl.',
      descripcion: 'App made with Angular where you can search places near to you and you will be able to know the nearest route',
      alt:'mapas',
      link: 'https://mapas-angular-bonus.netlify.app',
      repositorio:'https://github.com/JavierA-MorHer/mapas2daParte'
    },
    { 
      path: '../../../../assets/proyectos/gastos.png', 
      // descripcion: 'Aplicación hecha con React. Un planificador de gastos donde podrás establecer un presupuesto e ir anotando los gastos.',
      descripcion: 'App made with Reat. A budget planner.',
      alt:'gastos',
      link:'https://manejadordegastosreact.netlify.app/',
      repositorio:'https://github.com/JavierA-MorHer/Control_de_Gastos_App'
    },
    { 
      path: '../../../../assets/proyectos/ipApp.png', 
      // descripcion: 'Aplicación hecha con React, utilizando la IP Geolocation API (https://geo.ipify.org/) y para el mapa usé Leaflet (https://leafletjs.com/), permite buscar ubicaciones mediante direcciones IPV4 o IPV6 ',
      descripcion: 'App made with Reat. Using the IP Geolocation API (https://geo.ipify.org/) and  Leaflet (https://leafletjs.com/) for the map, allows you to find places using an IPV4 address.',
      alt:'ipApp',
      link:'https://ipaddressappreact.netlify.app',
      repositorio:'https://github.com/JavierA-MorHer/Ip_address_track_app'
    },
    { 
      path: '../../../../assets/proyectos/tip.png', 
      // descripcion: 'Aplicación hecha con React, calculadora de propinas.',
      descripcion: 'App made with React, a Tip Calculator',
      alt:'tip',
      link:'https://mytipcalculatorapp.netlify.app/' ,
      repositorio:'https://github.com/JavierA-MorHer/TipCalculator'
    },
    { 
      path: '../../../../assets/proyectos/windbnb.png', 
      // descripcion: 'Aplicación hecha con React, un clon de AirBnb que permite filtrar habitaciones por lugar y por numero de personas a hospedar.',
      descripcion: 'App made with React. An AirBnb clon, allows you to search a place by filtering by City and number of guests.',
      alt:'windbnb',
      link:'https://windbnbappreact.netlify.app/',
      repositorio:'https://github.com/JavierA-MorHer/WindbnbByJavier'
    },
    { 
      path: '../../../../assets/proyectos/advice.png', 
      // descripcion: 'Hecha con Javascript puro, HTML y CSS, cada que presionas el dado te genera un nuevo consejo.',
      descripcion: 'Made only with HMTL, CSS and Javascript, every time you touch the dice, the app generates a new advice',
      alt:'advice',
      link:'https://advicegeneratorappjs.netlify.app/',
      repositorio:'https://github.com/JavierA-MorHer/AdviceGenerator'
    },
    { 
      path: '../../../../assets/proyectos/rate.png', 
      // descripcion: 'Hecha con Javascript puro, HTML y CSS, un componente que permite calificar un servicio en un rango de 1 a 5.',
      descripcion: 'Made only with HMTL, CSS and Javascript. A component that allows you to rate a product or a service in a range of 1 out of 5',
      alt:'rate',
      link:'https://ratingcomponentjs.netlify.app/',
      repositorio:'https://github.com/JavierA-MorHer/Interactive-rating-component'
    },
    { 
      path: '../../../../assets/proyectos/gifApp.png', 
      //descripcion: 'Hecha con Angular consumiendo la api de Giphy (https://giphy.com/), permite realizar busquedas y guardar el historial de las mismas.',
      descripcion: 'Made with Angular using the Giphy API (https://giphy.com/), allows you to search any gifs you want and keep the history search.',
      alt:'gifApp',
      link:'https://myangulargifapp.netlify.app/',
      repositorio:'https://github.com/JavierA-MorHer/Angular-gifsApp'
    },
  ];
}
