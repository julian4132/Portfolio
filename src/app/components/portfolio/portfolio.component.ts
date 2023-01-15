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
                    "linkIndex": ""}
                    ],
                  "educationData":
                    [{"title":"Instituto Politécnico Superior",
                    "subtitle":"Técnico en Informática Profesional y Personal",
                    "description":"Cursado realizado entre 2017 y 2022, con especialización técnica en Informática. Primer Escolta de la Bandera Argentina.",
                    "extraInfo": "2017 - 2022",
                    "imgSrc": "assets/images/logo_poli.png",
                    "linkIndex": ""}],
                  "awardsData":
                    [{"title":"Olimpíada Internacional de Matemática",
                      "subtitle":"Bronce (2019, 2020), Plata (2021, 2022)",
                      "description":"Participaciones llevadas a cabo en los años 2019 (Inglaterra), 2020 (Rusia, virtual), 2021 (Rusia, virtual) y 2022 (Noruega), obteniendo dos medallas de bronce y luego dos de plata",
                      "extraInfo": "2019, 2020, 2021, 2022",
                      "imgSrc": "assets/images/IMOOslo.png",
                      "linkIndex": "imo"},
                     {"title":"Olimpíada Iberoamericana de Matemática",
                      "subtitle":"Oro (2020, 2021) - puntaje perfecto",
                      "description":"Participaciones llevadas a cabo en los años 2020 (Perú, virtual) y 2021 (Costa Rica, virtual)",
                      "extraInfo": "2020, 2021",
                      "imgSrc": "assets/images/IberoCostaRica.jpg",
                      "linkIndex": "ibero"},
                      {"title":"UdeSA AI Challenge",
                      "subtitle":"3er puesto",
                      "description":"Competencia en equipos de 4 personas enfocada hacia el desarrollo de un equipo jugador de fútbol NPC en Unity, que compite en un torneo contra los desarrollados por otros equipos participantes.",
                      "extraInfo": "2022",
                      "imgSrc": "assets/images/AIChallenge.jpg",
                      "linkIndex": "ai"},
                      {"title":"Olimpíada Informática Argentina",
                      "subtitle":"3er puesto",
                      "description":"Participación llevada a cabo durante el año 2022",
                      "extraInfo": "2022",
                      "imgSrc": "assets/images/oia.png",
                      "linkIndex": "oia"}
                      ],
                  "projectsData":
                  [{"title":"Portfolio Web",
                    "subtitle":"Proyecto final de Argentina Programa",
                    "description":"Creación de un portfolio web, desarrollando el frontend en Angular y el backend en Spring Boot.",
                    "extraInfo": "Junio 2022 - Enero 2023",
                    "imgSrc": "assets/images/APLogo.png",
                    "linkIndex": "argprog"},
                   {"title":"Cuatro en línea",
                    "subtitle":"Proyecto llevado adelante en el cursado del secundario",
                    "description":"Desarrollo de una app web en Laravel que permite al usuario jugar al cuatro en línea. Soporta modo multijugador, y modo de un solo jugador con dificultad configurable.",
                    "extraInfo": "Marzo 2022 - Noviembre 2022",
                    "imgSrc": "assets/images/ConnectFour.png",
                    "linkIndex": "connectfour"},
                   {"title":"A un paso del mundial",
                    "subtitle":"Proyecto llevado adelante en el cursado del secundario, en grupos de 4 personas",
                    "description":"Creación de un sitio web ficticio que permitiera visualizar los resultados del mundial Qatar 2022 y realizar diferentes predicciones.",
                    "extraInfo": "Marzo 2022 - Noviembre 2022",
                    "imgSrc": "assets/images/qatar2022.png",
                    "linkIndex": "qatar"}
                  ]
              },

              "skillsData": {
                "softSkillsData": [{
                    "percentage": 85,
                    "description": "Comunicación efectiva"
                },{
                    "percentage": 90,
                    "description": "Resolución de problemas"
                },{
                    "percentage": 90,
                    "description": "Pensamiento crítico"
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