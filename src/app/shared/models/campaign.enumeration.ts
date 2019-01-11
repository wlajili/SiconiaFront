/**
 * firmeware campaign status
 * @author Maroua BOUKHDHIR
 * @export
 * @enum {number}
 */
export enum CampaignStatus {
    DRAFT = 'Draft',
    INPROGRESS = 'In progress',
    ABORTING = 'Aborting',
    CANCELLED = 'Cancelled',
    FAILED = 'failed',
    PARTIALLYFAILED = 'partially failed',
    PARTIALLYCANCELLED = 'partially cancelled',
    DONE = 'Done'
}
/**
 * campaign type
 * @author Maroua BOUKHDHIR
 * @export
 * @enum {number}
 */
export enum CampaignType {
    FIRMWARE_UPDATE = 'Firmware update',
    // CONFIG_PARAM_UPDATE = 'configPramUpdate',
    // SECURITY_KEY_RENEWAL = 'securityKeyRenewal'
}
/**
 * target device type
 * @author Maroua BOUKHDHIR
 * @export
 * @enum {number}
 */
export enum DeviceType {
    ELECTRIC = 'Electric',
    GAS = 'Gas'
}
/**
 * campaign activation mode
 *
 * @export
 * @enum {number}
 */
export enum ActivationScheduleMode {
    AFTER_ALL_DOWNLOADS = 'after all downloads',
    AFTER_EACH_DOWNLOAD = 'after each download',
    MANUAL = 'manual',
    SCHEDULED = 'scheduled'
}
/**
 * campaign download mode
 *
 * @export
 * @enum {number}
 */
export enum DownloadScheduleMode {
    IMMEDIATE = 'immediate',
    SCHEDULED = 'scheduled'
}
/**
 * campaign taracking Mode
 *
 * @export
 * @enum {number}
 */
export enum CampaignTrackingMode {
    ALL_TASKS_RESULTS = 'all Tasks Results',
    FAILED_TASKS_RESULTS = 'failed Tasks Results',
    ACTIVATED = 'activated',
}

/**
 * Firmware campaign mode
 *
 * @export
 * @enum {number}
 */
export enum FirmwareCampaignMode {
    UNICAST,
    BROADCAST,
}

