import { Injectable } from '@angular/core';
import { SubcategoriaModel } from '../models/subcategoria.model';

@Injectable()
export class SubcategoriaService {
  private subcategorias: SubcategoriaModel[] = [
    {
      id: '0',
      nombre: 'PC',
      catPrincipal: 'Computadoras',
      filtros: 'Nuevo'

    },
    {
      id: '1',
      nombre: 'Notebook',
      catPrincipal: 'Computadoras',
      filtros: 'REF'
    },


  ];

  constructor() { }

  getSubCategorias() {
    return this.subcategorias;
  }

  getSubCategoriaById(id: string): SubcategoriaModel {
    return this.subcategorias.filter(x => x.id.toString() === id)[0];
  }



}
