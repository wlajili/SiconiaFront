export class Page<T> {

  public content: T[];
  public first: boolean;
  public last: boolean;
  public number: number;
  public numberOfElements: number;
  public size: number;

  // TODO: identify type of sort.
  /*
    {
      "direction": "DESC",
      "property": "mrid",
      "ignoreCase": false,
      "nullHandling": "NATIVE",
      "ascending": false,
      "descending": true
    },
   */
  public sort: any;
  public totalElements: number;
  public totalPages: number;

}
