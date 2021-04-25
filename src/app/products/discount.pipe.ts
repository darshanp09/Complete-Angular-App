import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'Discount'
})
export class discountPipe implements PipeTransform {

  transform(value: number, amount: number): any {
    return value - amount;
  }
}
