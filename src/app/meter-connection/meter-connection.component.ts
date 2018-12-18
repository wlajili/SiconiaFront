import { Compteur } from './../compteur';
import { MeterConnectionService } from '../../services/meter.connection.service';
import { Component, OnInit } from '@angular/core';
import { NgbTimeStruct, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import {HttpErrorResponse} from '@angular/common/http';
import { Echange } from '../echange';
import { stringify } from 'querystring';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';




@Component({
  selector: 'app-meter-connection',
  templateUrl: './meter-connection.component.html',
  styleUrls: ['./meter-connection.component.css']
})
export class MeterConnectionComponent implements OnInit {


  priority;
  noun;
  startTime: NgbTimeStruct = {hour: 0, minute: 0, second: 0};
  ExpireTime: NgbTimeStruct = {hour: 0, minute: 0, second: 0};
  startDate: NgbDateStruct ;
  ExpireDate: NgbDateStruct ;
  compteur: Compteur;
  echange: Echange = new Echange();
  isCompteurIdVide = true;
  idCompteur;
  erreurCompteur ;
  erreurDateExpiration ;
  erreurStartTime ;
  erreurExpireTime ;
  errorResponse: HttpErrorResponse;
  listCompteurs: Compteur[];
  compteurs: Array <any>;
  listMrid: string[] = [];

  public model: any;

  constructor( private meterService: MeterConnectionService) { }

  ngOnInit() {
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term =>
        term.length < 3 ? []
          : this.getCompteurs().filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)
        )
    )

  getCompteurs(): string[] {
    this.meterService.getAllMeterMridStartsWith(this.idCompteur.toUpperCase()).subscribe(
      data => {
        /* en cas nous utilisons RepositoryRestResource
        this.compteurs = data['_embedded']['deviceEntities'];*/
        this.compteurs = data['content'];
        this.listMrid = [];
        this.compteurs.forEach(comp => {
          this.listMrid.push(comp.mrid);
        });
        console.log(this.listMrid);
        return this.listMrid;
      }, err => {
        if (err instanceof HttpErrorResponse) {
          this.errorResponse = err;
        }
        console.log(err.error.message);
      }
    );
    return this.listMrid;
  }

  getCompteurById() {
    this.erreurCompteur = null;
    console.log(this.idCompteur);
    this.meterService.getMeter(this.idCompteur).subscribe(data => {
      this.compteur = data;
      console.log(' we got ', this.compteur);
      this.isCompteurIdVide = false;
      this.erreurCompteur = null;
    }, err => {
      if (err instanceof HttpErrorResponse) {
        this.errorResponse = err;
        if (this.errorResponse.status === 404) {
          this.erreurCompteur = 'valeur non en table';
        } else {
          this.erreurCompteur = 'service non disponible.';
        }
    }
      console.log(err.error.message);
    });
  }

  saveEchange() {

    this.echange.device = this.compteur;
    this.echange.dateTime = new Date();
    this.echange.verb = 'request';
    this.echange.revision = '1';
    this.echange.source = 'FLUVIUS';
    if (this.startTime == null) {
      this.erreurStartTime = 'La saisie du start time est obligatoire.';
      console.log(this.erreurStartTime);
    } else if (this.ExpireTime == null) {
      this.erreurExpireTime = 'La saisie du expire time est obligatoire.';
    } else {
      this.echange.executeStartTime = new Date(this.startDate.year, this.startDate.month - 1,
        this.startDate.day, this.startTime.hour, this.startTime.minute, this.startTime.second);
      this.echange.executeExpireTime = new Date(this.ExpireDate.year, this.ExpireDate.month - 1,
        this.ExpireDate.day, this.ExpireTime.hour, this.ExpireTime.minute, this.ExpireTime.second);
      if (this.echange.executeStartTime >= this.echange.executeExpireTime) {
        this.erreurExpireTime = 'Expire time doits etre supérieur à start time';
      } else {
        console.log(this.echange);
        this.meterService.addEchange(this.echange).subscribe(data => {
          console.log('insertion ok');
        }, err => {
          this.errorResponse = err;
          console.log(this.errorResponse.message);
        });
      }
    }
  }
}

