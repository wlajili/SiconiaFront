import { SidebarService } from './../sidebar/sidebar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-center-top',
  templateUrl: './menu-center-top.component.html',
  styleUrls: ['./menu-center-top.component.scss']
})
export class MenuCenterTopComponent implements OnInit {


    constructor(private sidebarService: SidebarService) {
    }

    ngOnInit() {
      this.sidebarService.menuCenterSelected = 'DeviceControl';
      this.sidebarService.getMenuCenterSelected();
    }

    changeSidebar(menuSelected) {
      this.sidebarService.menuCenterSelected = menuSelected;
      this.sidebarService.getMenuCenterSelected();
    }
}
