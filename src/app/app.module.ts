import * as $ from 'jquery';
import { SpinnerComponent } from './shared/spinner.component';
import { MeterConnectionService } from '../services/meter.connection.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core/core.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { DeviceControlModule } from './device-control/device-control.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
  ]);
}

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent
  ],
  imports: [
    CoreModule,
    DeviceControlModule,
    BrowserModule,
    FormsModule,
    NgbPaginationModule, NgbAlertModule, NgbModule, HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 20000,
      autoDismiss: true,
      positionClass: 'toast-top-right',
      maxOpened: 7
      }),
      TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
