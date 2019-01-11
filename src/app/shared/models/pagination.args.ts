/**
 * Argument to specify for pagination
 *
 * @export
 * @interface PaginationArgs
 * @see http://docs.spring.io/spring-data/commons/docs/current/api/org/springframework/data/domain/Pageable.html
 */
export interface PaginationArgs {
  pageNumber?: number;
  pageSize?: number;
  sorts?: PaginationSortArgs[];
}

/**
 * Property to sort with and her order
 *
 * @export
 * @interface PaginationSortArgs
 * @see http://docs.spring.io/spring-data/commons/docs/current/api/org/springframework/data/domain/Sort.html
 */
export interface PaginationSortArgs {
  property: string;
  direction: PaginationSortOrderType;
}

/**
 * The sort order of the pagination
 *
 * @export
 * @enum
 * @see http://docs.spring.io/spring-data/commons/docs/current/api/org/springframework/data/domain/Sort.Direction.html
 */
type PaginationSortOrderType = 'ASC' | 'DESC';
/*export enum PaginationSortOrderType {
  ASC = 'ASC',
  DESC = 'DESC'
}*/

/**
 * Paginated page format
 *
 * @export
 * @interface PaginationPage
 * @template T type of the entity in the page
 * @see https://docs.spring.io/spring-data/commons/docs/current/api/org/springframework/data/domain/Page.html
 */
export interface PaginationPage<T> {
  content: T[];
  last?: boolean;
  totalElements?: number;
  totalPages?: number;
  size?: number;
  number?: number;
  first?: boolean;
  sort?: PaginationSortArgs[];
}
