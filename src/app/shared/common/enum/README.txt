
Example uses enum, but this can be any type of defined constant.
typeof operator gives you all of benefits of TypeScript typing features.

############### DECLARATION ################
export enum typeMeterEnum {
    GAZ = "GAZ",
    ELEC = "ELEC",
    ALL = "ALL",
}
########### USE FROM COMPONENT #############
import { typeMeterEnum  } from './emplacement...'
export class EnumMeterClass {
  readonly typeMeterEnum : typeof typeMeterEnum = typeMeterEnum;    
}
################## HTML ####################
<p>{{typeMeterEnum.GAZ}}<p>
############################################
