import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'mapToIterable'
})
export class MapToIterable implements PipeTransform {
    transform(map: Map<any, any>): any[] {
        const ret = [];

        if (typeof map !== 'undefined') {
            map.forEach((val, key) => {
                ret.push({
                    key: key,
                    val: val
                });
            });

        }
        return ret;
    }
}
