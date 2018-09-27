import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDescription'
})
export class ShortDescriptionPipe implements PipeTransform {

  transform(valueDescricao: any, args?: any): any {

    if (valueDescricao.length > 20) {
      valueDescricao = valueDescricao.slice(0 , 20);
      valueDescricao = valueDescricao + '...';
      return valueDescricao;

    } else {
      return valueDescricao;
    }

  }

}
