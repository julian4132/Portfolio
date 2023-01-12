import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { PortfolioItemInfo } from '../portfolio-item/portfolio-item.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experienceProps: PortfolioItemInfo[]=
                   [{"title":"Don Marca",
                    "subtitle":"Desarrollador backend",
                    "description":"Llevado adelante en el marco del programa de prácticas profesionales del Instituto Politécnico. Integración a un equipo de trabajo e interacción directa con el cliente.",
                    "extraInfo": "Junio 2022 - Noviembre 2022\n\nPráctica Profesional",
                    "imgSrc": "assets/images/logodonmarca.png"}
                  ];

  constructor() { }

  ngOnInit(): void {
  }

}
