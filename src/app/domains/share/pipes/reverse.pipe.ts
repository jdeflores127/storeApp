import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  standalone: true
})
export class ReversePipe implements PipeTransform {

  /*El pipe personalizado recibe 1 parametro de entrada, n argumentos y lo transforma y devuelve una salidas*/
  transform(value: String): unknown {
    return value.split('').reverse().join('');
  }

}
