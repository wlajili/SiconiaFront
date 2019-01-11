import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

    @Input() layout;
    pageInfo;
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title
    ) {
    }
    ngOnInit() { }
}
