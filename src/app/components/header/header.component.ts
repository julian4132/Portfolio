import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() headerData:{fullname:string,
                       profession:string,
                       aboutText:string}={
                       "fullname":"",
                       "profession":"",
                       "aboutText":""
                       };

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  goToPage(dir:string){
    this.route.navigate([dir]);
  }

}
