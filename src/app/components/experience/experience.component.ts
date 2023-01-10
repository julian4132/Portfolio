import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experienceProps: {title:string,
                    subtitle:string,
                    description:string,
                    extraInfo:string
                    imgSrc:string}[]=
                   [{"title":"Profile",
                    "subtitle":"Desarrollador fullstack - Práctica profesional",
                    "description":"Completar",
                    "extraInfo": "Junio 2022 - Noviembre 2022",
                    "imgSrc": "assets/images/logo-profile2.png"}
                  ];

  constructor() { }

  ngOnInit(): void {
  }

}
