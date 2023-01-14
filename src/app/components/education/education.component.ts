import { Component, OnInit, Input } from '@angular/core';
import { PortfolioItemInfo } from '../portfolio-item/portfolio-item.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  @Input() educationProps:PortfolioItemInfo[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
