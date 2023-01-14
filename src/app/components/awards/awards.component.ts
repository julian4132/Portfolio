import { Component, OnInit } from '@angular/core';
import { PortfolioItemInfo } from '../portfolio-item/portfolio-item.component';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {

  awardsProps: PortfolioItemInfo[]=
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
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
