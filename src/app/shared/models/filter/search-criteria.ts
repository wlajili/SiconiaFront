export class SearchCriteria {

  public key: string;
  public operator: string;
  public value: any;

  constructor(key?: string, operator?: string, value?: any) {
    this.key = key;
    this.operator = operator;
    this.value = value;
  }

  public static isName(search) {
    return search.key === 'name';
  }
  public static isCreatedBy(search) {
    return search.key === 'createdBy';
  }
  public static isDescription(search) {
    return search.key === 'description';
  }
  public static isStartDate(search) {
    return search.key === 'creationDate' && search.operator === '>=';
  }
  public static isEndDate(search) {
    return search.key === 'creationDate' && search.operator === '<=';
  }
}
