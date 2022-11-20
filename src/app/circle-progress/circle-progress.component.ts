import { Component,  ElementRef,  Input,  OnInit,  SimpleChanges,  ViewChild } from '@angular/core';
@Component({
  selector: 'circle-progress',
  templateUrl: './circle-progress.component.html',
  styleUrls: ['./circle-progress.component.scss'],
})
export class CircleProgressComponent implements OnInit {
  @Input() progress: number | undefined;
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    let scrollProgress = document.getElementById('progress');
    scrollProgress!.style.background = `conic-gradient(#008fff ${this.progress}%, #f2f2f4 ${this.progress}%)`;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.loadData();
  }
}