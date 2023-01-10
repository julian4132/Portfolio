import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectsProps: {title:string,
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
    {"title":"Profile",
    "subtitle":"Desarrollador fullstack - Práctica profesional",
    "description":"Completar",
    "extraInfo": "Junio 2022 - Noviembre 2022",
    "imgSrc": "assets/images/logo-profile2.png"}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
