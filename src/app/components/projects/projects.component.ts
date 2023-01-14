import { Component, Input, OnInit } from '@angular/core';
import { PortfolioItemInfo } from '../portfolio-item/portfolio-item.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  @Input() projectsProps: PortfolioItemInfo[]=[]

  constructor() { }

  ngOnInit(): void {
  }

}
