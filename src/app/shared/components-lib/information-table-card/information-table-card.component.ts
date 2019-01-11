import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-information-table-card',
  templateUrl: './information-table-card.component.html',
  styleUrls: ['./information-table-card.component.css']
})
export class InformationTableCardComponent implements OnInit {

  /* Information card Title */
  @Input() title = '';

  /* Information card Description */
  @Input() description = '';

  /* Information card Menu */
  @Input() menu: Object[];

  /* Information card Thead */
  @Input() thead: string[];

  /* Information card Content */
  @Input() data: Object[];

  /* Information card show-all link */
  @Input() showAll = '';

  constructor() { }

  ngOnInit() { }

  isDate(val) {
    return val instanceof Date;
  }



}

