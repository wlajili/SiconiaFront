import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { FirmwareVersion } from '..';
import { Config } from '../../shared/common/config/config';

@Injectable({ providedIn: 'root' })
export class CommonHttpService {
    http: HttpClient;
    API_ENDPOINT = Config.configData.api_url_read;

    constructor(http: HttpClient) {
        this.http = http;
    }

    public findAllFirmwareVersions(): Observable<FirmwareVersion[]> {
        const firmwareUrl = `${this.API_ENDPOINT}/v1/firmware`;
        return this.http.get<any>(firmwareUrl);
    }
}
