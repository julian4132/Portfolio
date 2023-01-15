import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAskDeleteComponent } from '../modal-ask-delete/modal-ask-delete.component';
import { ModalWindowLinksComponent } from '../modal-window-links/modal-window-links.component';
import { ModalWindowComponent } from '../modal-window/modal-window.component';


export interface PortfolioItemInfo{
  title:string
  subtitle:string
  description:string
  extraInfo:string
  imgSrc:string
  linkIndex:string
}

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {

  @Input() props:PortfolioItemInfo=
                 {"title": "",
                  "subtitle": "",
                  "description": "",
                  "extraInfo": "",
                  "imgSrc": "",
                  "linkIndex": ""};

  @Output() deleteItem = new EventEmitter();
  @Output() editItem = new EventEmitter();

  constructor(public dialog:MatDialog) {}

  openDialog():void{
    const dialogRef = this.dialog.open(ModalWindowComponent, {
      data: this.props
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      console.log(result);
      if(result.edited){
        this.editItem.emit(result.data);
      }
    });
  }

  askIfDeleteDialog(){
    const dialogRef = this.dialog.open(ModalAskDeleteComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result){
        this.deleteItem.emit();
      }
    })
  }

  getLinks(){
    this.dialog.open(ModalWindowLinksComponent, {
      data: this.props.linkIndex
    })
  }

  isLoggedIn(){
    return sessionStorage.getItem('currentUser')!=null;
  }

  ngOnInit(): void {
  }

}
