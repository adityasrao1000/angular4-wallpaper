import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {
    transform(items: string[], filter: string): any {
        if (!items || !filter) {
            return [];
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => item.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase()) !== -1);
    }
}
