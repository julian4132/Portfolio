import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  educationProps:{title:string,
                  subtitle:string,
                  description:string,
                  extraInfo:string
                  imgSrc:string}[]=
                  [{"title":"Instituto Politécnico Superior",
                    "subtitle":"Técnico en Informática Profesional y Personal",
                    "description":"Completar",
                    "extraInfo": "2017 - 2022",
                    "imgSrc": "assets/images/logo_poli.png"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
