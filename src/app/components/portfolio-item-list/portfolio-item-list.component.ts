import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { trigger, animate, state, style, transition } from '@angular/animations';


@Component({
  selector: 'app-portfolio-item-list',
  templateUrl: './portfolio-item-list.component.html',
  styleUrls: ['./portfolio-item-list.component.scss'],
  animations: [
    trigger('deleteAnim', [
      state('appear', style({ height: '*', /*display: 'block',*/ color:'black' })),
      state('disappear', style({ height: '0px', maxHeight: '0', display: 'none', color: 'white' })),
      transition('appear <=> disappear', [animate('1000ms cubic-bezier(0.4, 0.0, 0.2, 1)')]),
    ]),
  ]
})
export class PortfolioItemListComponent implements OnInit {

  @Input() items:{title:string,
                  subtitle:string,
                  description:string,
                  extraInfo:string,
                  imgSrc:string}[]=[];

  deletedElement:any;

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    console.log(this.items);
  }

  deleteIndex(index:number){
    console.log(index);
    this.deletedElement = index;

    //this.items.splice(index, 1);
  }


}
