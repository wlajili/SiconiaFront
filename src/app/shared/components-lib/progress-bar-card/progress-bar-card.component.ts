import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar-card',
  templateUrl: './progress-bar-card.component.html',
  styleUrls: ['./progress-bar-card.component.css']
})
export class ProgressBarCardComponent implements OnInit {

  // value on top of card
  @Input() value1;
  @Input() value2;
  // il existe deux types (type1/ type2)
  @Input() type;
  // subtitle
  @Input() subtitle;
  // color
  @Input() color;
  // percent
  @Input() percent;

  constructor() {
  }

  ngOnInit() {
  }

}
