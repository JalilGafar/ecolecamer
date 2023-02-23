import { Pipe, PipeTransform } from '@angular/core';
import { field } from 'src/app/core/model/field-model';

@Pipe({
    name: 'domfilter',
    pure: false
})
export class DomFilterPipe implements PipeTransform {
    transform(items: field[] | null, filter: {branche:string}): field[] {
        if (items ) {
            return items.filter(item => item.branche_dom.indexOf(filter.branche) !== -1);
        }else {
            return [];
        }
        

        // filter items array, items which match and return true will be
        // kept, false will be filtered out
    }
}