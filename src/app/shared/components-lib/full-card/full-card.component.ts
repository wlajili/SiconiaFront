import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-full-card',
  templateUrl: './full-card.component.html',
  styleUrls: ['./full-card.component.scss']
})
export class FullCardComponent implements OnInit {
  /* card title */
  @Input()
  title: string;
  /* card text */
  @Input() text = '';
  /* card style if has */
  /* card-center # card-icon # card-border */
  @Input()
  cardStyle?: any = '';
  /* card icon if has icon class*/
  @Input()
  icon?: string;

  constructor() { }

  ngOnInit() {
  }

}
