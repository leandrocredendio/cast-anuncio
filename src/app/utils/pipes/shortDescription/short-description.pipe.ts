import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDescription'
})
export class ShortDescriptionPipe implements PipeTransform {

  transform(valueDescricao: any, limite: number): any {

    if (valueDescricao.length > limite) {
      valueDescricao = valueDescricao.slice(0 , limite);
      valueDescricao = valueDescricao + '...';
      return valueDescricao;

    } else {
      return valueDescricao;
    }

  }

}
