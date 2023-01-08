import { Component, OnInit } from '@angular/core';
import { FetchPortfolioDataService } from 'src/app/services/fetch-portfolio-data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolioData:any;
  constructor(private dataService:FetchPortfolioDataService) { }

  ngOnInit(): void {
    this.dataService.fetchData().subscribe(
      data => {
        console.log(data);
        this.portfolioData=data;
      }
    );
  }

}
