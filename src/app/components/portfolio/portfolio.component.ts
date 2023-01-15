import { Component, OnInit } from '@angular/core';
import { FetchPortfolioDataService } from 'src/app/services/fetch-portfolio-data.service';
import { headerData } from '../header/header.component';
import { PortfolioItemInfo } from '../portfolio-item/portfolio-item.component';
import { RoundProgressInfo } from '../round-progress/round-progress.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolioData:{headerData:headerData,
                experienceData:{
                  experienceData:PortfolioItemInfo[],
                  educationData:PortfolioItemInfo[],
                  awardsData:PortfolioItemInfo[],
                  projectsData:PortfolioItemInfo[]
                },
                skillsData:{
                  softSkillsData:RoundProgressInfo[],
                  languagesData:RoundProgressInfo[]
                }}={
                "headerData": {
                "fullName":"Julián Máximo Cabrera",
                "profession":"Full Stack Developer",
                "aboutText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "profilePicSrc": "assets/images/profile.jpg",
                "bannerSrc": "assets/images/Banner.jpg"},
                
                "experienceData": {
                  "experienceData":
                    [{"title":"Don Marca",
                    "subtitle":"Desarrollador backend",
                    "description":"Llevado adelante en el marco del programa de prácticas profesionales del Instituto Politécnico. Integración a un equipo de trabajo e interacción directa con el cliente.",
                    "extraInfo": "Junio 2022 - Noviembre 2022\n\nPráctica Profesional",
                    "imgSrc": "assets/images/logodonmarca.png",
                    "linkIndex": "hoola"}
                    ],
                  "educationData":
                    [{"title":"Instituto Politécnico Superior",
                    "subtitle":"Técnico en Informática Profesional y Personal",
                    "description":"Cursado realizado entre 2017 y 2022, con especialización técnica en Informática. Primer Escolta de la Bandera Argentina.",
                    "extraInfo": "2017 - 2022",
                    "imgSrc": "assets/images/logo_poli.png",
                    "linkIndex": ""}],
                  "awardsData":
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
                      "linkIndex": ""}
                      ],
                  "projectsData":
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
                  ]
              },

              "skillsData": {
                "softSkillsData": [{
                    "percentage": 80,
                    "description": "de efectividad"
                }],
                "languagesData": [{
                    "percentage": 100,
                    "description": "Español"
                },{
                    "percentage": 90,
                    "description": "Inglés (nivel MCER: C2)"
                }],
            }
              
            };
    
  constructor(private dataService:FetchPortfolioDataService) {}

  ngOnInit(): void {
    if(sessionStorage.getItem('currentUser')){
      this.dataService.fetchData().subscribe(
        data => {
          console.log(data);
          this.portfolioData=data;
        }
      );
    }
  }

}