import { Pipe, PipeTransform } from '@angular/core';
import { degree } from 'src/app/core/model/degree-model';

@Pipe({
    name: 'myfilter',
    pure: false
})
export class MyFilterPipe implements PipeTransform {
    transform(items: degree[] | null, filter: {groupe:string}): degree[] {
        if (items ) {
            return items.filter(item => item.groupe.indexOf(filter.groupe) !== -1);
        }else {
            return [];
        }
        

        // filter items array, items which match and return true will be
        // kept, false will be filtered out
    }
}