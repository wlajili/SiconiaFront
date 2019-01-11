import { Compteur } from './compteur';

export class Echange {
    messageID: Number;
    verb: String;
    noun: String;
    revision: String;
    dateTime: Date;
    source: String;
    replyCode: String;
    requestPriority: String;
    executeStartTime: Date;
    executeExpireTime: Date;
    deviceId: Number;

    constructor() {}
}
