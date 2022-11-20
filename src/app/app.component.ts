import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  progressbarValue = 0;
  curSec: number = 0;
  title = 'Portfolio';



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
