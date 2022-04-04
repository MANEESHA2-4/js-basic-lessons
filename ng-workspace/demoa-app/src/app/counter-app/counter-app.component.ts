import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  templateUrl: './counter-app.component.html',
  styleUrls: ['./counter-app.component.css']
})
export class CounterAppComponent implements OnInit {
  totalCount: number = 0;
  hitIncreaseValue: number = 10;
  constructor() { }

  ngOnInit(): void {
  }
  increaseCount(value: number) {
    this.totalCount += this.hitIncreaseValue;
  }
}
