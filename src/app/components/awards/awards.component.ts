import { Component, Input, OnInit } from '@angular/core';
import { PortfolioItemInfo } from '../portfolio-item/portfolio-item.component';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {

  @Input() awardsProps: PortfolioItemInfo[]=[]


  constructor() { }

  ngOnInit(): void {
  }

}
