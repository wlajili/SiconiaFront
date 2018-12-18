import { Compteur } from './../app/compteur';
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import { Observable, throwError} from 'rxjs';
import { Echange } from 'src/app/echange';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
const size = 20;

@Injectable()

export class MeterConnectionService {

    erreur;

    constructor(private http: HttpClient) {}

    getAllMeterMridStartsWith(mRID: string) {
        return this.http.get('http://localhost:8080/devicesStartwithMrid/' + mRID + '?size=' + size);
    }

    /*
    // utiliser @RepositoryRestResource
    getAllMeterMridStartsWithREP(mRID: string) {
        return this.http.get('http://localhost:8080/API/Devices/search/findByMridStartsWith?mrid=' + mRID)
        .pipe(retry(3));
    }*/

    getMeter(mRID: string): Observable<Compteur> {
        return this.http.get<Compteur>('http://localhost:8080/devices/' + mRID)
        .pipe(retry(3));
    }

   addEchange(echange: Echange): Observable<Echange> {
        return this.http.post<Echange>('http://localhost:8080/request/', echange, httpOptions)
        .pipe(retry(3));
   }






    private handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client side error:', errorResponse.error.message);
        } else {
            console.error('server Side error', errorResponse.status);
        }
        this.erreur = 'valeur introuvable en base';
        console.log('hello from service');
        return throwError(this.erreur);
    }


}
