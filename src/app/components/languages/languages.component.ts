import { Component, OnInit, Input } from '@angular/core';
import { RoundProgressInfo } from '../round-progress/round-progress.component';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  @Input() languagesProps:RoundProgressInfo[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  circularDefault = {"maxValue":100, "duration":60};
}
