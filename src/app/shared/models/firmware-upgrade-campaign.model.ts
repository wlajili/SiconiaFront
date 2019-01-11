import { CompactedEntity } from '..';

/**
 * Firmware Upgrade Campaign creation Entity
 * @author Maroua BOUKHDHIR
 * @export
 * @interface FirmwareUpgradeCampaignEntity
 */
export interface FirmwareUpgradeCampaignEntity extends CompactedEntity {
  campaignName?: string; // create case :(
  name?: string; // update case :(
  creationDate?: string;
  createdBy?: string;
  description?: string;
  deviceType?: string;
  expireDate?: string;
  statusDate?: string;
  groups?: string[];
  meters?: string[];
  maxRetries?: string;
  priority?: string;
  timeOut?: string;
  period?: string;
  campaignTrackingMode?: string;
  mode?: string;
  transferBlockSize?: string;
  downloadStartDate?: any;
  downloadEndDate?: any;
  downloadScheduleMode?: string;
  activationStartDate?: string;
  activationEndDate?: string;
  activationScheduleMode?: string;
  firmwareTargetId?: string;
  firmwareSourceId?: string[];
}

/**
 * firmware upgrade form
 * @author Maroua BOUKHDHIR
 * @export
 * @interface FirmwareUpgradeCampaignForm
 */
export interface FirmwareUpgradeCampaignForm {
  generalInformation: {
    settingsFirmwareVersion?: string;
    targetFirmwareVersion?: string;
    name?: string;
    description?: string;
    downloadStartDate?: any;
    downloadEndDate?: any;
    downloadScheduleMode?: string;
    activationStartDate?: string;
    activationEndDate?: string;
    activationScheduleMode?: string;
    maxRetries?: string;
    priority?: string;
    timeOut?: string;
    transferBlockSize?: string;
    campaignTrackingMode?: string;
  };
  meters?: any[];
  groups?: any[];
}
