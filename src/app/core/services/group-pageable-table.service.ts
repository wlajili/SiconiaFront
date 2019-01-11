import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../../shared/common/config/config';

/*
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
*/

@Injectable()
export class GroupPageableTableService {

    API_ENDPOINT = Config.configData.api_url_read;

    constructor(private httpClient: HttpClient) { }

    public getGroupTablePagination(sort, param, size, page, search, firmwareId?: string): Observable<any> {
        const url = this.API_ENDPOINT + '/v1/groups?sort='
        + sort + '&search=' + search + '&param=' + param + '&size=' + size + '&page=' + page;
        return this.httpClient.get<any>(!firmwareId ? url : `${url}&firmwareId=${firmwareId}`);
    }

    public getFavouriteGroupTablePagination(sort, param, size, page): Observable<any> {
        const url = this.API_ENDPOINT + '/v1/groups?sort='
        + sort + '&search=isFavorite==true' + '&param=' + param + '&size=' + size + '&page=' + page;
        return this.httpClient.get<any>(url);
    }


}
