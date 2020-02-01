import { Injectable } from '@angular/core';
import { FiltroModel } from '../models/filtro.model';

@Injectable()
export class FiltroService {

  private filtro: FiltroModel[] = [
    {
      id: '0',
      nombre: 'Nuevo',
      catPrincipal: 'Computadoras',
      subCategorias: 'PC'

    },
    {
      id: '1',
      nombre: 'REF',
      catPrincipal: 'Computadoras',
      subCategorias: 'Notebook'
    },


  ];

  constructor() { }

  getFiltrosBySubC(SubC) {

    return this.filtro.filter(x => x.subCategorias === SubC);
  }

  getFiltroById(id: string): FiltroModel {
    return this.filtro.filter(x => x.id.toString() === id)[0];
  }
}
