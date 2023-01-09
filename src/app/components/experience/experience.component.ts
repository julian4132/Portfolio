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
                    extraInfo:string}[]=
                   [{"title":"Profile",
                    "subtitle":"Desarrollador fullstack - Práctica profesional",
                    "description":"Completar",
                    "extraInfo": "Junio 2022 - Noviembre 2022"},
                    {"title":"Profile2",
                    "subtitle":"Desarrollador fullstack - Práctica profesional",
                    "description":"Completar",
                    "extraInfo": "Junio 2022 - Noviembre 2022"},
                  ];

  constructor() { }

  ngOnInit(): void {
  }

}
