
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './config';

@Injectable({
    providedIn: 'root',
})
export class ConfigService {
    constructor(private http: HttpClient) { }

    getSettings(): Promise<any> {
        const promise = this.http.get('./assets/config/config.json')
            .toPromise()
            .then(settings => {
                Config.configData = settings;
                return settings;
            });

            console.log(promise);
        return promise;
    }
}
