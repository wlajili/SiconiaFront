import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { CampaignStatus, DeviceType, CampaignType, CR } from '../../../shared';
import { CampaignSearchForm } from '../models/campaign-search.model';

@Component({
  selector: 'app-search-campaign',
  templateUrl: './search-compaign.component.html',
  styleUrls: ['./search-compaign.component.scss']
})
export class SearchCompaignComponent implements OnInit {
  @Input() dropdown;
  campaignSearchForm: CampaignSearchForm = {};
  // regulatory data collection
  crStatus: CR[] = [];
  crTargetType: CR[] = [];
  crCampaignType: CR[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.crStatus = this.fillInCrDataFromEnum(CampaignStatus);
    this.crTargetType = this.fillInCrDataFromEnum(DeviceType);
    this.crCampaignType = this.fillInCrDataFromEnum(CampaignType);
  }
  /**
   * push enum data into a collection of CR
   *
   * @private
   * @param {*} enumData
   * @returns {CR[]}
   * @memberof SearchCompaignComponent
   */
  fillInCrDataFromEnum(enumData): CR[] {
    const collection: CR[] = [];
    for (const item in enumData) {
      collection.push({
        'id': item,
        'label': enumData[item]
      });
    }
    return collection;
  }
  /**
   * navigate to campaign list and hide search
   * pop-up
   * @memberof SearchCompaignComponent
   */
  public onSearchCampaignClick() {
    console.log('click search', this.campaignSearchForm);
    this.router.navigate(['/campaign/list', this.campaignSearchForm]);
    //TODO: hide pop-up
  }
  /**
   * rest search form
   *
   * @private
   * @memberof SearchCompaignComponent
   */
  onRestFormClick() {
    Object.keys(this.campaignSearchForm).map(property => {
      this.campaignSearchForm[property] = '';
    });
  }
}
