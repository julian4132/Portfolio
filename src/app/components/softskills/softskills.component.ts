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
  circularDefault = {"maxValue":100, "duration":60};
}
