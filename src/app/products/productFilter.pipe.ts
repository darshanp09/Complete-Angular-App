import { Pipe, PipeTransform } from '@angular/core';
import {IProduct} from './product.model';

@Pipe({
  name: 'search'
})

export class ProductSearchPipe implements PipeTransform {

  transform(value: IProduct[], userInput: string): any {
    if (userInput !== null){
      userInput.toLowerCase();
    }
    return  userInput ? value.filter( (a) => a.productName.toLowerCase().indexOf(userInput) !== -1) : value;
  }
}
