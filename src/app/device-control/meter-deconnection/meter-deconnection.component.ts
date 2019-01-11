import { debounceTime, distinctUntilChanged, tap, switchMap, catchError } from 'rxjs/operators';
import { MeterConnectionService } from 'src/services/meter.connection.service';
import { formErrors, validationMessage } from './../../utilities/meter-controle-form-data';
import { Compteur } from './../../compteur';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbTimeStruct, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { Echange } from 'src/app/echange';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-meter-deconnection',
  templateUrl: './meter-deconnection.component.html',
  styleUrls: ['./meter-deconnection.component.css']
})
export class MeterDeconnectionComponent implements OnInit {

  deconnectionForm: FormGroup;
  post: any;
  compteur: Compteur = new Compteur();
  echange: Echange = new Echange();
  startTime: NgbTimeStruct = {hour: 0, minute: 0, second: 0};
  startDate: NgbDateStruct ;
  expireTime: NgbTimeStruct = {hour: 0, minute: 0, second: 0};
  expireDate: NgbDateStruct ;
  errors = formErrors;
  messages = validationMessage;
  compteurs: Array <any>;
  listMrid: string[] = [];
  errorResponse: HttpErrorResponse;
  searching = false;
  searchFailed = false;
  isCompteurIdVide = true;
  attenteRetourSubmit = false;
  private _success = new Subject<string>();
  message: string;
  type: string;


  constructor(private fromBulder: FormBuilder, private meterService: MeterConnectionService, private router: Router) {
    this.deconnectionForm = fromBulder.group({
      'idCompteur': ['', Validators.required],
      'requestPriority': ['', Validators.required],
      'startTime': [{hour: 0, minute: 0, second: 0}, Validators.required],
      'startDate': ['', Validators.required],
      'expireTime': [{hour: 0, minute: 0, second: 0}, Validators.required],
      'expireDate': ['', Validators.required],
    });
    this.deconnectionForm.valueChanges.subscribe(() => this.onValueChanged());
    this.deconnectionForm.get('idCompteur').valueChanges.subscribe((term: string) => {if (term.length === 13) {
      console.log(term);
      this.getCompteurById(term);
    } else {
      this.isCompteurIdVide = true;
    }});
    this.onValueChanged();
   }

  ngOnInit() {
    this._success.subscribe((data: any) => {
      this.message = data.message;
      this.type = data.type;
    });
    this._success.pipe(
      debounceTime(6000)
    ).subscribe(() => this.message = null);
  }
  afficheMessage(val) {
    this._success.next(val);
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.GetListMrid(term.toUpperCase()).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    )

  GetListMrid(mrid: string) {
    return this.meterService.getAllMeterMridStartsWith(mrid);
  }

  getCompteurById(id: string) {
    this.meterService.getMeter(id).subscribe(data => {
      if (data === null) {
        this.afficheMessage({
          message : 'la valeur saisie n\'existe en base', type: 'danger'
        });
        console.log('la valeur saisie n\'existe en base');
        this.isCompteurIdVide = true;
      } else {
        this.compteur = data;
        console.log(' we got ', this.compteur);
        this.isCompteurIdVide = false;
        this.message = null;
      }
    }, err => {
      if (err instanceof HttpErrorResponse) {
        this.errorResponse = err;
        this.isCompteurIdVide = false;
       // if (this.errorResponse.status === 404) {
       this.afficheMessage({
          message : 'Serveur non disponible', type: 'danger'
       });
    }
      console.log(err.error.message);
    });
  }

  onValueChanged(data?: any) {
    if (!this.deconnectionForm) { return; }
    const form = this.deconnectionForm;
    for (const field in this.errors) {
      if (this.errors.hasOwnProperty(field)) {
        this.errors[field] = '';
        const control = form.get(field);
        if (control && (control.dirty || control.touched) && !control.valid) {
          const message = this.messages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.errors[field] += message[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit() {
    this.echange.verb = 'request';
    this.echange.revision = '1';
    this.echange.source = 'FLUVIUS';
    this.echange.dateTime = new Date();
    this.echange.verb = 'MeterDisconnect';
    console.log(this.deconnectionForm.get('idCompteur').value);
    console.log(this.compteur.mrid);
    if (this.deconnectionForm.get('idCompteur').value !== this.compteur.mrid) {
      this.afficheMessage({
        message : 'le numéro du compteur saisie est invalide', type: 'danger'
      });
      return;
    }
    this.echange.deviceId = this.compteur.id;
    this.startDate = this.deconnectionForm.get('startDate').value;
    this.expireDate = this.deconnectionForm.get('expireDate').value;
    this.startTime = this.deconnectionForm.get('startTime').value;
    this.expireTime = this.deconnectionForm.get('expireTime').value;

    this.echange.executeStartTime = new Date(this.startDate.year, this.startDate.month - 1,
      this.startDate.day, this.startTime.hour, this.startTime.minute, this.startTime.second);
    this.echange.executeExpireTime = new Date(this.expireDate.year, this.expireDate.month - 1,
      this.expireDate.day, this.expireTime.hour, this.expireTime.minute, this.expireTime.second);
    if (this.echange.executeStartTime >= this.echange.executeExpireTime) {
      this.afficheMessage({
        message : 'Expire time doits etre supérieur à start time', type: 'danger'
      });
      return;
    }
    this.attenteRetourSubmit = true;
    this.meterService.addEchange(this.echange).subscribe((data: Echange) => {
      console.log('insertion ok' + JSON.stringify(data));
      this.afficheMessage({
        message : 'la demande est envoyé avec succés.', type: 'success'
      });
      this.attenteRetourSubmit = false;
      setTimeout(() => {
        this.router.navigate(['/meter-connection']);
        console.log('hello from timeOut');
        }, 8000);
    }, err => {
      this.attenteRetourSubmit = false;
      this.afficheMessage({
        message : 'l\'envoie de la demande à échouer.', type: 'danger'
      });
      this.errorResponse = err;
      console.log(this.errorResponse.message);
    });
  }

}
