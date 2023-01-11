import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAskDeleteComponent } from '../modal-ask-delete/modal-ask-delete.component';
import { ModalWindowComponent } from '../modal-window/modal-window.component';


@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {

  @Input() props:{title: string,
                  subtitle: string,
                  description: string,
                  extraInfo: string,
                  imgSrc: string}=
                 {"title": "",
                  "subtitle": "",
                  "description": "",
                  "extraInfo": "",
                  "imgSrc": ""};

  @Output() deleteItem = new EventEmitter();

  constructor(public dialog:MatDialog) {}

  openDialog():void{
    const dialogRef = this.dialog.open(ModalWindowComponent, {
      data: this.props
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      console.log(result);
      //this.props.title=result.title;
      this.props=result;
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

  ngOnInit(): void {
  }

}
