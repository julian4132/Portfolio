import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LogOutService } from 'src/app/services/log-out.service';
import { UpdatePortfolioDataService } from 'src/app/services/update-portfolio-data.service';
import { ModalWindowHeaderComponent } from '../modal-window-header/modal-window-header.component';



export interface headerData{
  fullName:string;
  profession:string;
  aboutText:string;
  profilePicSrc:string;
  bannerSrc:string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() headerData:headerData={
                       "fullName":"",
                       "profession":"",
                       "aboutText":"",
                       "profilePicSrc":"",
                       "bannerSrc":""
                       };

  constructor(private route:Router, private logOutService:LogOutService, public dialog:MatDialog, private updateDataService:UpdatePortfolioDataService) { }

  ngOnInit(): void {
  }

  goToPage(dir:string){
    this.route.navigate([dir]);
  }

  isLoggedIn():boolean{
    return sessionStorage.getItem('currentUser')!=null;
  }

  logOut():void{
    this.logOutService.logOut();
  }

  openHeaderDialog():void{
    console.log("jurjuja");
    console.log(this.headerData);
    const dialogRef = this.dialog.open(ModalWindowHeaderComponent, {
      data: this.headerData
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result.edited){
        this.updateDataService.Update({headerData: result.data});
        this.headerData=result.data;
      }
    })
  }

}
