export interface ResponseGroup<T> {
  data: T;
  error: string;
  success: boolean;
}
