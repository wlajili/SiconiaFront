import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { paramPage } from './util/param-page-table.model';

@Component({
  selector: 'app-information-dynamic-table-card',
  templateUrl: './information-dynamic-table-card.component.html',
  styleUrls: ['./information-dynamic-table-card.component.css']
})
export class InformationDynamicTableCardComponent implements OnInit, OnChanges {

  constructor() { }

  //card title
  @Input() title = '';
  //totalPages  //Last page  //First page  //Total elements Result  //Number of elements per page  //Number of current page
  @Input() pageable?: Pageable;
  //page link de premier element dans le tableau
  @Input() firstLink = '';
  //list of table column (tableau d'object label/ key)
  @Input() thead: {}[];
  //export table card Menu
  @Input() exportMenu: Object[];
  //row table context Menu
  @Input() tableRowMenu: Object[];
  //content of table (pageable content)
  @Input() data: any;
  //check row if exist
  @Input() check: boolean;
  //object contain list of button if exist
  @Input() topButton: Object[];
  // externaliser l appel du service et lancer a travers la composante mère (next page)
  @Output() getPage = new EventEmitter();
  // externaliser l appel du service et lancer a travers la composante mère (element per page)
  @Output() setElementPerPage = new EventEmitter();
  // externaliser la liste des ID checked dans la page de la table
  @Output() getCheckedElement = new EventEmitter();
  // externaliser le parametre sort click
  @Output() sortByParam = new EventEmitter();

  //if all is checked
  @Input()
  allChecked: boolean;
  //id list of checked row
  listCheck = new Array();

  // dans le cas où nous voulons un tableat sans card
  @Input() withoutCard = false;

  paramPage: paramPage = new paramPage();
  //tableau qui contient les object selectionner du tableau
  @Input() items = [];
  /**
   *
   * @rowClick: return clicked row
   */
  @Output() rowClick: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['allChecked']) {
      // console.log(" change value ", this.allChecked);
    }
  }

  checkBoxInputAll() {
    if (this.allChecked === true) {
      for (const key of this.data) {
        key.selected = true;
      }
      this.items = [];
      this.items = this.data;
      this.getCheckedElement.emit(this.items);
    } else {
      for (const key of this.data) {
        key.selected = false;
      }
      this.items = [];
      this.getCheckedElement.emit(this.items);
    }
    // this.getCheckedElement.emit(checkedList);
  }

  isDate(val) {
    return val instanceof Date;
  }

  findIndexInData(data, value) {
    for (let i = 0, l = data.length; i < l; i++) {
      if (data[i].id === value) {
        return i;
      }
    }
    return -1;
  }

  checkBoxInput(i, idSelected) {
    if (this.data[i].selected === true) {
      this.items.push(this.data[i]);
    } else {
      this.items.splice(this.findIndexInData(this.items, this.data[i].id), 1);
    }
    this.getCheckedElement.emit(this.items);
  }

  nextPage() {
    if ((!this.pageable.last) && (this.paramPage.page < this.pageable.totalPages)) {
      this.getPage.emit(this.paramPage);
      this.paramPage.page = this.paramPage.page + 1;
    }
  }

  precedPage() {
    if (this.paramPage.page !== 1) {
      this.paramPage.page = this.paramPage.page - 1;

      const sendParamPage: paramPage = this.paramPage.copy();
      sendParamPage.page = sendParamPage.page - 1;

      this.getPage.emit(sendParamPage);

    }
  }

  elementPerPage() {
    this.paramPage.page = 1;

    const sendParamPage: paramPage = this.paramPage.copy();
    sendParamPage.page = sendParamPage.page - 1;


    this.setElementPerPage.emit(sendParamPage);

  }

  sortByColumnParam(param) {
    this.paramPage.param = param;

    if (this.paramPage.direction === 'ASC') {
      this.paramPage.direction = 'DESC';
    } else {
      this.paramPage.direction = 'ASC';
    }

    const sendParamPage: paramPage = this.paramPage.copy();
    sendParamPage.page = sendParamPage.page - 1;

    this.sortByParam.emit(sendParamPage);
  }

}
