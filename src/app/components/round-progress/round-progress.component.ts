import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-round-progress',
  templateUrl: './round-progress.component.html',
  styleUrls: ['./round-progress.component.scss']
})
export class RoundProgressComponent implements OnInit {

  private observer:any;
  isVisible = false;

  constructor(private el:ElementRef) { }

  ngOnInit(): void {
    /*const target = document.querySelector("#threshold")!;
    const observer = new IntersectionObserver(this.startTimer);
    console.log(target);
    observer.observe(target);*/
  }

  ngAfterViewInit():void{
    this.observer = new IntersectionObserver( entries => {
      if(entries[0].isIntersecting && !this.isVisible){
        this.isVisible=true;
        this.startTimer();
        console.log("Hoola");
      }
      else{
        this.isVisible=false;
      }
    },{
      threshold: 0.3
    });
    this.observer.observe(this.el.nativeElement as HTMLElement);
  }

  @Input() props:{maxValue:number,
                  duration:number}=
                 {"maxValue": 0,
                  "duration": 0}

  progressbarValue:number = 0;
  timeElapsed:number = 0;
  angle:string="conic-gradient(#7d2ae8 3.6deg, #ededed 0)";


  startTimer(){
    const timer = interval(30);
    const sub = timer.subscribe((time)=>{
      this.progressbarValue = Math.round(time * this.props.maxValue / this.props.duration);
      this.timeElapsed = time;
      //console.log(this.progressbarValue);
      
      //document.documentElement.style.setProperty('--angle', `${this.progressbarValue * 3.6}deg`);
      this.angle=`conic-gradient(#7d2ae8 ${this.progressbarValue * 3.6}deg, #ededed 0)`;

      if (this.timeElapsed === this.props.duration) {
        sub.unsubscribe();
      }
  })
  }

}
