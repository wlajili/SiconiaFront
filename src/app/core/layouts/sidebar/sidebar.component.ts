import { SidebarService } from './sidebar.service';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ROUTES } from './menu-items';
import { RouteInfo } from './sidebar.metadata';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


    showMenu = '';
    showSubMenu = '';
    public sidebarnavItems: any[];

    constructor(private modalService: NgbModal, private router: Router,
        private route: ActivatedRoute, private sidebarService: SidebarService) {

    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';

        } else {
            this.showMenu = element;
        }
    }
    addActiveClass(element: any) {
        if (element === this.showSubMenu) {
            this.showSubMenu = '0';

        } else {
            this.showSubMenu = element;
        }
    }

    // End open close
    ngOnInit() {
       this.sidebarService.change.subscribe(menuselected => {
        this.chargeSidebar(menuselected);
       });
    }

    chargeSidebar(menuTopIthem) {

        this.sidebarnavItems = ROUTES.filter(sidebarnavItem => sidebarnavItem.menuTopIthem === menuTopIthem);

        $(function () {
            $('.sidebartoggler').on('click', function () {
                if ($('#main-wrapper').hasClass('mini-sidebar')) {
                    $('body').trigger('resize');
                    $('#main-wrapper').removeClass('mini-sidebar');

                } else {
                    $('body').trigger('resize');
                    $('#main-wrapper').addClass('mini-sidebar');
                }
            });

        });
    }
}
