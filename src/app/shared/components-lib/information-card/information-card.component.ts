import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information-card',
  templateUrl: './information-card.component.html',
  styleUrls: ['./information-card.component.css']
})
export class InformationCardComponent implements OnInit {
  /* Information card Title */
  @Input() title  = '';

  /* Information card Description */
  @Input() description  = '';

  /* Information card Img */
  @Input() img  = '';

  /* Information card Menu */
  @Input() menu: Object[];

  /* id current info displayed */
  @Input() id: any;

  /* Information card Content */
  @Input() data: any;

  /* Information card show-all link */
  @Input() showAll = '';
  @Input()
  validateTextMsg?: string;
  @Input()
  cancelTextMsg?: string;
  @Output()
  onValidateEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  onCancelEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  onStartEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  onMenuSelectItemEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router) {}

  ngOnInit() {}

  public handleMenuClickItem(item) {
    if (item.link) {
      this.router.navigate([item.link , this.id]);
    } else {
      this.onMenuSelectItemEvent.emit(item.label);
    }
  }
}
