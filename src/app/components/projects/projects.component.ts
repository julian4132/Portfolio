import { Component, OnInit } from '@angular/core';
import { PortfolioItemInfo } from '../portfolio-item/portfolio-item.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectsProps: PortfolioItemInfo[]=
   [{"title":"Profile",
    "subtitle":"Desarrollador fullstack - Práctica profesional",
    "description":"Completar",
    "extraInfo": "Junio 2022 - Noviembre 2022",
    "imgSrc": "assets/images/logo-profile2.png",
    "linkIndex": ""},
    {"title":"Profile",
    "subtitle":"Desarrollador fullstack - Práctica profesional",
    "description":"Completar",
    "extraInfo": "Junio 2022 - Noviembre 2022",
    "imgSrc": "assets/images/logo-profile2.png",
    "linkIndex": ""},
    {"title":"Profile",
    "subtitle":"Desarrollador fullstack - Práctica profesional",
    "description":"Completar",
    "extraInfo": "Junio 2022 - Noviembre 2022",
    "imgSrc": "assets/images/logo-profile2.png",
    "linkIndex": ""}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
