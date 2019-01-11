import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonHttpService } from '../../../shared';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  firmwareversionList: string[] = [];
  constructor(private router: Router, private firmwareService: CommonHttpService) {}

  public ngOnInit() {
   /* this.firmwareService.findAllFirmwareVersions().subscribe(firmware => {
      firmware.forEach(element => {
        this.firmwareversionList.push(element['firmwareId']);
      });
    });*/
  }

  public applySearchMeter(criteria) {
    // backend service callback
    this.router.navigate(['meter/list-meter', criteria]);
   }
}

