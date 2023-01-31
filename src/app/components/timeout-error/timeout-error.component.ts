import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timeout-error',
  templateUrl: './timeout-error.component.html',
  styleUrls: ['./timeout-error.component.scss']
})
export class TimeoutErrorComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  goToPage(dir:string){
    this.route.navigate([dir]);
  }

}
