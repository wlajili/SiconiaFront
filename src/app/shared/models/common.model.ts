/**
 * compact entity: collection regulation
 * @author Maroua BOUKHDHIR
 * @export
 * @interface CR
 */
export interface CR {
  id?: string;
  label?: string;
}

/**
 * compact entity structure 
 * @author Maroua BOUKHDHIR
 * @export
 * @interface CompactEntity
 */
export interface CompactedEntity {
   id?: number;
}
/**
 * firmware version information
 *
 * @export
 * @interface FirmwareVersion
 */
export interface FirmwareVersion {
  firmwareId?: string;
  modelNumber?: string;
  modelVersion?: string;
  energyType?: string;
}