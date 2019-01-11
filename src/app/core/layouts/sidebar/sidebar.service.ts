import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class SidebarService {

    menuCenterSelected;

    @Output() change: EventEmitter<boolean> = new EventEmitter();

    getMenuCenterSelected() {
        this.change.emit(this.menuCenterSelected);
    }
}
