import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchCriteria } from '../../../shared/models/filter/search-criteria';
import { SearchOperator } from '../../../shared/models/filter/search-operator';
import { Group } from '../../../shared/models/group';
import { Router } from '@angular/router';
import { DataService } from '../../../group/services/data.service';


@Component({
  selector: 'app-search-group',
  templateUrl: './search-group.component.html',
  styleUrls: ['./search-group.component.scss']
})
export class SearchGroupComponent implements OnInit {
  @Input() dropdown;
  @Input()
  searchElement: Group = new Group();
  @Input()
  firmwareVersion?: string;
  _page = 0;

  public get page(): number {
    return this._page;
  }

  @Input()
  public set page(value: number) {
    this._page = value;
    this.loadGroups();
  }

  /** Size of page (Number of item to load in page). */
  public _size = 10;

  public get size(): number {
    return this._size;
  }

  @Input()
  public set size(value: number) {
    this._size = value;
    this.loadGroups();
  }

  @Output()
  public search: EventEmitter<SearchCriteria[]> = new EventEmitter<SearchCriteria[]>();

  constructor(private router: Router, private dataService: DataService) {

  }

  public ngOnInit() {
  }
  public searchGr() {
    this.page = 0;
    this.loadGroups();
    this.router.navigate(['group/list-group']);
  }

  public loadGroups(): void {
    if (!this.searchElement) {
      console.log('Empty search group criteria ');
    }

    this.dataService.sendMessage(this.buildSearchRequest());
  }

  public buildSearchRequest(): SearchCriteria[] {
    let searchCriterias: SearchCriteria[] = [];

    searchCriterias = this.addSearchElement(searchCriterias, this.searchElement.name, 'name', SearchOperator.LIKE);
    searchCriterias = this.addSearchElement(searchCriterias, this.searchElement.createdBy, 'createdBy', SearchOperator.EQ);
    searchCriterias = this.addSearchElement(searchCriterias, this.searchElement.description, 'description', SearchOperator.LIKE);
    searchCriterias = this.addSearchElement(searchCriterias, this.searchElement.minDate, 'creationDate', SearchOperator.GE);
    searchCriterias = this.addSearchElement(searchCriterias, this.searchElement.maxDate, 'creationDate', SearchOperator.LE);

    return searchCriterias;
  }

  public addSearchElement(criteria: SearchCriteria[], searchElementValue, name, operator) {
    if (searchElementValue) {
      criteria.push(new SearchCriteria(name, operator, searchElementValue));
    }
    return criteria;
  }

  public filterGroupByCriteria() {
    this.search.emit(this.buildSearchRequest());
  }

  public onRestFormClick(form) {
    Object.keys(form).map(property => {
      form[property] = '';
    });
  }

}
