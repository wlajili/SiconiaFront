import { SidebarService } from './layouts/sidebar/sidebar.service';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { NavigationComponent } from './layouts/header-navigation/navigation.component';
import { MenuCenterTopComponent } from './layouts/menu-center-top/menu-center-top.component';
import { BreadcrumbComponent } from './layouts/breadcrumb/breadcrumb.component';
import { SearchComponent } from './layouts/search/search.component';
import { FullComponent } from './layouts/full/full.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { GroupPageableTableService } from './services/group-pageable-table.service';
import { GroupService } from './services/group.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ConfigService } from '../shared/common/config/config.service';
import { CampaignService } from './services/campaign.service';

export function get_settings(configService: ConfigService) {
    return () => configService.getSettings();
  }

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    wheelSpeed: 2,
    wheelPropagation: true,
};
@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        CoreRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        PerfectScrollbarModule,
        NgbModule.forRoot(),
        HttpClientModule,
        HttpModule,
        TranslateModule.forChild(),
        SharedModule
    ],
    declarations: [
        SidebarComponent,
        NavigationComponent,
        MenuCenterTopComponent,
        BreadcrumbComponent,
        SearchComponent,
        FullComponent
    ],
    exports: [
        CoreRoutingModule,
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
    ],
    providers: [
        { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
        GroupService, CampaignService,
        GroupPageableTableService,
        SidebarService,
        { provide: APP_INITIALIZER, useFactory: get_settings, deps: [ConfigService], multi: true }
    ]
})
export class CoreModule { }
