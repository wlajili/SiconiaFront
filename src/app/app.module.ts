import { MeterConnectionService } from '../services/meter.connection.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MeterConnectionComponent } from './meter-connection/meter-connection.component';
import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MeterConnectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbPaginationModule, NgbAlertModule, NgbModule, HttpClientModule
  ],
  providers: [MeterConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
