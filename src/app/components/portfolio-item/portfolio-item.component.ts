import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {

  @Input() props:{title: string,
                  subtitle: string,
                  description: string,
                  extraInfo: string}=
                 {"title": "",
                  "subtitle": "",
                  "description": "",
                  "extraInfo": ""};

  constructor() {}

  ngOnInit(): void {
  }

}
