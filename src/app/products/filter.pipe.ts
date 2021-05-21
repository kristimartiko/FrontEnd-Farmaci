import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.module';

@Pipe({ name: 'filter'})
export class FilterPipe implements PipeTransform {
    transform(products: any[], searchText: string): Product[] | any[] {
        if(!products || !searchText) {
            return products;
        }
        return products.filter(product => {
            return product.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
            product.lastName.toLowerCase().includes(searchText.toLowerCase())
        })
    }
}