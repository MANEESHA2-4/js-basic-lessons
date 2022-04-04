import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hit-button',
  templateUrl: './hit-button.component.html',
  styleUrls: ['./hit-button.component.css']
})
export class HitButtonComponent implements OnInit {
  //input properties
  @Input()
  label: number = 0;
  constructor() { }
  @Output()
  hit = new EventEmitter();
  ngOnInit(): void {
  }
  btnClickHandler() {
    this.label = this.label + 1;
    this.hit.emit(this.label);
  }
}
