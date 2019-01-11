/**
 * campaign search entity
 *
 * @export
 * @interface CampaignSearchForm
 */
export interface CampaignSearchForm {
    name?: string;
    status?: string;
    campaignType?: string;
    targetGroupId?: string;
    targetDevice?: string;
    startDate?: string;
    endDate?: string;
}
