import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {

  awardsProps: {title:string,
    subtitle:string,
    description:string,
    extraInfo:string
    imgSrc:string}[]=
   [{"title":"Profile",
    "subtitle":"Desarrollador fullstack - Práctica profesional",
    "description":"Completar",
    "extraInfo": "Junio 2022 - Noviembre 2022",
    "imgSrc": "assets/images/logo-profile2.png"},
    {"title":"Profile",
    "subtitle":"Desarrollador fullstack - Práctica profesional",
    "description":"Completar",
    "extraInfo": "Junio 2022 - Noviembre 2022",
    "imgSrc": "assets/images/logo-profile2.png"},
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
