import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.module';

@Pipe({ name: 'filter'})
export class FilterPipe implements PipeTransform {
    transform(products: any[], searchText: string): Product[] {
        if(!products || !searchText) {
            return products;
        }
        return products.filter(product => {
            return product.emri.toLowerCase().includes(searchText.toLowerCase())
        });
    }
}