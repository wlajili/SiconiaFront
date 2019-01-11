import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { contentResponse } from '../../shared/models/content-response.model';
import { groupInformationModel } from '../../shared/models/group-information.model';
import { ContentResponseStatisticsGroup } from '../../shared/models/content-response-statistics-group.model';
import { ResponseMeterStat } from '../../shared/models/response-meter-stat';
import { Config } from '../../shared/common/config/config';
import { GroupInformationCreation } from '../../shared/models/group-information-creation.model';
import { AckResponse } from '../../shared/models/ack-response';
import { ResponseGroup } from '../../shared/models/response-group';
/*
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
*/

@Injectable()
export class GroupService {

  //to run tests
  //API_ENDPOINT = 'http://localhost:8005';
  //API_ENDPOINT_BUS = 'http://localhost:19191/busIhm';

  API_ENDPOINT = Config.configData.api_url_read;
  API_ENDPOINT_BUS = Config.configData.api_url_busIhm;

  constructor(
    private httpClient: HttpClient) { }

  // group details
  public getGroupInfo(id: number): Observable<groupInformationModel> {
    return this.httpClient.get<groupInformationModel>(this.API_ENDPOINT + '/v1/groups/' + id + '/infos');
  }
  public getMeterGroup(id: number, page: number, size: number): Observable<any> {
    return this.httpClient.get<any>(this.API_ENDPOINT + '/v1/groups/' + id + '/meters/' + '?page=' + page + '&size=' + size);
  }

  public getMeterGroupByName(name: string, page: number, size: number): Observable<any> {
    return this.httpClient.get<any>(this.API_ENDPOINT + '/v1/groups/' + name + '/metersByGroupName/' + '?page=' + page + '&size=' + size);
  }

  public getCountMeterByGroupNameAndStatus(id: string, status: string): Observable<ContentResponseStatisticsGroup> {
    return this.httpClient.get<contentResponse>(this.API_ENDPOINT + '/v1/statistics/groups?groupId=' + id + '&status=' + status);
  }

  public getCountMeterByType(type: string, id: string): Observable<contentResponse> {
    return this.httpClient.get<contentResponse>(this.API_ENDPOINT + '/v1/statistics/groups/communcations?type=' + type + '&groupId=' + id);
  }

  public getcountFirmwareApplicatifByGroupId(id: string): Observable<ResponseMeterStat> {
    return this.httpClient.get<contentResponse>(this.API_ENDPOINT + '/v1/statistics/groups/firmwareApplicatif?groupId=' + id);
  }

  public getcountFirmwareModemByGroupId(id: string): Observable<ResponseMeterStat> {
    return this.httpClient.get<contentResponse>(this.API_ENDPOINT + '/v1/statistics/groups/firmwareModem?groupId=' + id);
  }

  createGroupInformation(groupInfo: GroupInformationCreation): Observable<AckResponse> {
    return this.httpClient.put<AckResponse>(this.API_ENDPOINT_BUS + '/createGroup', groupInfo);
  }

  addDeviceToGroup(assignRequest: any): Observable<AckResponse> {
    return this.httpClient.post<AckResponse>(this.API_ENDPOINT_BUS + '/addMeterToGroup', assignRequest);
  }

  removeDeviceFromGroup(assignRequest: any): Observable<AckResponse> {
    return this.httpClient.put<AckResponse>(this.API_ENDPOINT_BUS + '/removeMeterFromGroup', assignRequest);
  }

  deleteGroup(groupId: any): Observable<string> {
    return this.httpClient.post<string>(this.API_ENDPOINT_BUS + '/deleteMeterGroupById', groupId);
  }

  updateGroupInformation(groupInfo: GroupInformationCreation): Observable<ResponseGroup<GroupInformationCreation>> {
    return this.httpClient.post<ResponseGroup<GroupInformationCreation>>(this.API_ENDPOINT_BUS + '/updateMeterGroup', groupInfo);
  }

}
