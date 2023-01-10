import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

  constructor(public dialog:MatDialog) {}

  openDialog():void{
    const dialogRef = this.dialog.open(ModalWindowComponent, {
      data: this.props
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

  ngOnInit(): void {
  }

}
