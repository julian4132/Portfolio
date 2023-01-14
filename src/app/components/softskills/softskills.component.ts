import { Component, OnInit, Input } from '@angular/core';
import { RoundProgressInfo } from '../round-progress/round-progress.component';

@Component({
  selector: 'app-softskills',
  templateUrl: './softskills.component.html',
  styleUrls: ['./softskills.component.scss']
})
export class SoftskillsComponent implements OnInit {

  @Input() softSkillsProps:RoundProgressInfo[]=[];

  constructor() { }

  ngOnInit(): void {
  }
  circularDefault = {"maxValue":100, "duration":60};
}
