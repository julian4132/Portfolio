import { Component, OnInit } from '@angular/core';
import { FetchPortfolioDataService } from 'src/app/services/fetch-portfolio-data.service';
import { headerData } from '../header/header.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolioData:{headerData:headerData}={
                "headerData": {
                "fullname":"Julián Máximo Cabrera",
                "profession":"Full Stack Developer",
                "aboutText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}};
    
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