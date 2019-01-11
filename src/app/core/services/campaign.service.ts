
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../../shared/common/config/config';

@Injectable()
export class CampaignService {

    API_ENDPOINT = Config.configData.api_url_read;

    constructor(private httpClient: HttpClient) { }

    public getCampaigns(sort, param, size, page, search): Observable<any> {
        return this.httpClient.get<any>(this.API_ENDPOINT + '/compaign/searchCompaigns?sort=' +
            sort + '&search=' + 0 + '&param=' + param + '&size=' + size + '&page=' + page);
    }
}
