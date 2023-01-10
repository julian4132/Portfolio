import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-softskills',
  templateUrl: './softskills.component.html',
  styleUrls: ['./softskills.component.scss']
})
export class SoftskillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  progressbarValue = 0;
  curSec: number = 0;
  title = 'Portfolio';
  circularDefault = {"maxValue":100, "duration":60};



  startTimer(seconds:number){
    const timer = interval(1000);
    const sub = timer.subscribe((sec)=>{
      this.progressbarValue = sec * 100 / seconds;
      this.curSec = sec;

      if (this.curSec === seconds) {
        sub.unsubscribe();
      }
  })
  }

}
