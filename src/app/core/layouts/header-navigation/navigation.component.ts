import { Component, AfterViewInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';
@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements AfterViewInit {

    name: string;
    langImg: string;

    public config: PerfectScrollbarConfigInterface = {};
    constructor(private modalService: NgbModal, private translate: TranslateService) {
        this.langImg = 'assets/images/lang-flag/en.png';
        translate.setDefaultLang('en');
    }

    // This is for Notifications
    notifications: Object[] = [{
        round: 'round-danger',
        icon: 'ti-link',
        title: 'Luanch Admin',
        subject: 'Just see the my new admin!',
        time: '9:30 AM'
    }, {
        round: 'round-success',
        icon: 'ti-calendar',
        title: 'Event today',
        subject: 'Just a reminder that you have event',
        time: '9:10 AM'
    }, {
        round: 'round-info',
        icon: 'ti-settings',
        title: 'Settings',
        subject: 'You can customize this template as you want',
        time: '9:08 AM'
    }, {
        round: 'round-primary',
        icon: 'ti-user',
        title: 'Pavan kumar',
        subject: 'Just see the my admin!',
        time: '9:00 AM'
    }];


    ngAfterViewInit() {

        const set = function () {
            const width = (window.innerWidth > 0) ? window.innerWidth : this.screen.width;
            const topOffset = 0;
            if (width < 1170) {
                $('#main-wrapper').addClass('mini-sidebar');
            } else {
                $('#main-wrapper').removeClass('mini-sidebar');
            }
        };
        $(window).ready(set);
        $(window).on('resize', set);


        $('.search-box a, .search-box .app-search .srh-btn').on('click', function () {
            $('.app-search').toggle(200);
        });


        $('body').trigger('resize');
    }

    changeLanguage(language) {
        this.langImg = 'assets/images/lang-flag/' + language + '.png';
        this.translate.use(language);
    }
}
