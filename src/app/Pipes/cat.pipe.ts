import { Pipe, PipeTransform } from '@angular/core';
import { CategoriaModel } from '../models/categoria.model';

@Pipe({
  name: 'cat'
})
export class CatPipe implements PipeTransform {
  transform(items: Array<any>, categoria: CategoriaModel): Array<any> {
    return items.filter(item => item.categoria === categoria.catPrincipal);
 }
}
