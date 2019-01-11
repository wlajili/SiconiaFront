import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { CR, MeterSearchCriteria, FirmwareVersion, statusMeterEnum, typeMeterEnum } from '../..';
import { CommunicationMethod } from '../../common/enum/communication-method.enum';
import { DataService } from '../../../group/services/data.service';

@Component({
  selector: 'app-search-meter',
  templateUrl: './search-meter.component.html',
  styleUrls: ['./search-meter.component.scss']
})
export class SearchMeterComponent implements OnInit {
  @Input() dropdown?: any;

  @Input()
  public criteria: MeterSearchCriteria = {};

  public display: boolean;

  @Input()
  public currentFirmwareVersion?: string;

  @Input() energyType?: string;

  @Input()
  public firmware: FirmwareVersion[];

  @Output()
  public onSearchEvent: EventEmitter<MeterSearchCriteria> = new EventEmitter<MeterSearchCriteria>();

  public crStatus: CR[] = [];
  public crTypeMeter: CR[] = [];
  public crTypeMeter2: string[] = [this.energyType];
  public crCommunicationMethod: CR[] = [];

  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    if (this.energyType === 'ELECTRICITY') {
      this.energyType = 'ELEC';
      console.log('yes');
    }

    if (this.currentFirmwareVersion) {
      this.criteria.firmwareVersion = this.currentFirmwareVersion;
      this.criteria.type = this.firmware.filter(f => f.firmwareId === this.currentFirmwareVersion)
        .map(val => val.energyType)[0];
    }
    this.crStatus = this.getCrArrayDataFromEnum(statusMeterEnum);
    this.crTypeMeter = this.getCrArrayDataFromEnum(typeMeterEnum);
    this.crCommunicationMethod = this.getCrArrayDataFromEnum(CommunicationMethod);

    // legacy TODO: remove energy type input
    if (this.energyType) {
      this.criteria.type = this.energyType;
    }
  }
  public onClick() {
    this.display = true;
    this.dataService.sendMessage(this.display);
    this.dataService.sendMessage(this.criteria);

  }
  getCrArrayDataFromEnum(enumData): CR[] {
    const collection: CR[] = [];
    for (const item in enumData) {
      collection.push({
        id: item,
        label: enumData[item]
      });
    }
    return collection;
  }

  /**
  * rest search form
  *
  * @private
  * @memberof SearchCompaignComponent
  */
  onRestFormClick() {
    Object.keys(this.criteria).map(property => {
      this.criteria[property] = '';
    });
  }
}
