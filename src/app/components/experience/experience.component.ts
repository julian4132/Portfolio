import { Component, OnInit, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { PortfolioItemInfo } from '../portfolio-item/portfolio-item.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  @Input() experienceProps: PortfolioItemInfo[]=[]

  constructor() { }

  ngOnInit(): void {
  }

}
