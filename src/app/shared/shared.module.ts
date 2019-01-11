import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullCardComponent } from './components-lib/full-card/full-card.component';

import { InformationTableCardComponent } from './components-lib/information-table-card/information-table-card.component';

/*import { SiconiaLibraryModule } from 'siconia-library';*/
import { InformationCardComponent } from './components-lib/information-card/information-card.component';
import { KeysPipe } from './pipes/keys.pipe';
import { MapToIterable } from './pipes/mapIterable.pipe';
import { TranslateModule } from '@ngx-translate/core';
import {
    InformationDynamicTableCardComponent
} from './components-lib/information-dynamic-table-card/information-dynamic-table-card.component';
import { ProgressBarCardComponent } from './components-lib/progress-bar-card/progress-bar-card.component';
import { SearchCompaignComponent } from './components/search-compaign/search-compaign.component';
import { SearchGroupComponent } from './components/search-group/search-group.component';
import { SearchMeterComponent } from './components/search-meter/search-meter.component';


@NgModule({
    imports: [
        CommonModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule,
        /*SiconiaLibraryModule*/
        TranslateModule.forChild(),
    ],
    declarations: [
        InformationCardComponent,
        InformationTableCardComponent,
        FullCardComponent,
        KeysPipe,
        MapToIterable,
        InformationDynamicTableCardComponent,
        ProgressBarCardComponent,
        SearchCompaignComponent,
        SearchGroupComponent,
        SearchMeterComponent
    ],
    providers: [],
    exports: [
        CommonModule,
        FormsModule,
        RouterModule,
        /*SiconiaLibraryModule,*/
        InformationDynamicTableCardComponent,
        InformationCardComponent,
        InformationTableCardComponent,
        FullCardComponent,
        KeysPipe,
        MapToIterable,
        TranslateModule,
        ProgressBarCardComponent,
        SearchCompaignComponent,
        SearchGroupComponent,
        SearchMeterComponent
    ]
})
export class SharedModule { }
