import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-portfolio-item-list',
  templateUrl: './portfolio-item-list.component.html',
  styleUrls: ['./portfolio-item-list.component.scss']
})
export class PortfolioItemListComponent implements OnInit {

  @Input() items:{title:string,
                  subtitle:string,
                  description:string,
                  extraInfo:string}[]=[];
;
  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }


}
