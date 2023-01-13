import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  @Input() educationProps:{title:string,
                  subtitle:string,
                  description:string,
                  extraInfo:string
                  imgSrc:string}[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
