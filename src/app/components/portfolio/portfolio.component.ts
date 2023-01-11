import { Component, OnInit } from '@angular/core';
import { FetchPortfolioDataService } from 'src/app/services/fetch-portfolio-data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolioData:{headerData:{
                fullname:string,
                profession:string,
                aboutText:string}}={
                "headerData": {
                "fullname":"",
                "profession":"",
                "aboutText":""}};
    
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
