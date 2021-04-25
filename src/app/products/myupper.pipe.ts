import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'myPipe'
})


export class MyUpperPipe implements PipeTransform {

  transform(value: string, kindOff: string): any {
    return  kindOff === 'upper' ?  value.toUpperCase() : value.toLowerCase();
    // return value.toLowerCase();
  }
}
