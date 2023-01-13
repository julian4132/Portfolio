import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { trigger, animate, state, style, transition } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { ModalWindowComponent } from '../modal-window/modal-window.component';
import { PortfolioItemInfo } from '../portfolio-item/portfolio-item.component';
import { UpdatePortfolioDataService } from 'src/app/services/update-portfolio-data.service';


@Component({
  selector: 'app-portfolio-item-list',
  templateUrl: './portfolio-item-list.component.html',
  styleUrls: ['./portfolio-item-list.component.scss'],
  animations: [
    trigger('deleteAnim', [
      state('appear', style({ height: '*', opacity: 1, color:'black' })),
      state('disappear', style({ height: '0px', maxHeight: '0', opacity: 0, color: 'white' })),
      transition('appear <=> disappear', [animate('2000ms cubic-bezier(0.4, 0.0, 0.2, 1)')]),
    ]),
    trigger('insertAnim', [
      state('disappear', style({ height: '0px', maxHeight: '0', opacity: 0, color: 'white' })),
      state('appear', style({ height: '*', opacity: 1, color:'black' })),
      transition('disappear <=> appear', [animate('2000ms cubic-bezier(0.4, 0.0, 0.2, 1)')]),
    ])
  ]
})
export class PortfolioItemListComponent implements OnInit {

  @Input() items:PortfolioItemInfo[]=[];
  @Input() identifier:string="";

  deletedElement:any;
  created:boolean=false;

  constructor(public dialog:MatDialog, private updateDataService:UpdatePortfolioDataService) { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    console.log("Mucha atención!");
    console.log(this.items);

    this.updateDataService.Update({experienceData: {[this.identifier]: this.items}});
  }

  deleteIndex(index:number){
    console.log(index);
    this.deletedElement = index;

    setTimeout( () => { 
      this.deletedElement = null;
      this.items.splice(index, 1);
      this.updateDataService.Update({experienceData: {[this.identifier]: this.items}});
    } , 2500);
  }

  openCreateDialog():void{
    const dialogRef = this.dialog.open(ModalWindowComponent, {
      data: {"title": "",
      "subtitle": "",
      "description": "",
      "extraInfo": "",
      "imgSrc": ""}
    })
    dialogRef.afterClosed().subscribe(result => {
      if(result.edited){
        this.created=true;
        this.items.unshift(result.data);
        setTimeout( () => { 
          this.created=false;
        }, 50);
        this.updateDataService.Update({experienceData: {[this.identifier]: this.items}});
      }
    })
  }

  syncWithDatabase(i:number, event:any):void{
    console.log("Debiera funcionar");
    this.items[i]=event;
    this.updateDataService.Update({experienceData: {[this.identifier]: this.items}});
  }
}
