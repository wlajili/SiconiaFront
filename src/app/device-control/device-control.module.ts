import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeterDeconnectionComponent } from './meter-deconnection/meter-deconnection.component';
import { MeterMessageComponent } from './meter-message/meter-message.component';
import { MeterConnectionComponent } from './meter-connection/meter-connection.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MeterConnectionService } from 'src/services/meter.connection.service';

@NgModule({
  declarations: [MeterConnectionComponent, MeterDeconnectionComponent, MeterMessageComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [MeterConnectionService],
})
export class DeviceControlModule { }
