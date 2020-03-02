import { Injectable } from '@angular/core';
import { FiltroModel } from '../models/filtro.model';

@Injectable()
export class FiltroService {

filtroAny: any[] = [];

  public filtro: FiltroModel[] = [
    {
      id: '0',
      nombre: 'Nuevo',
      titulo: 'Uso',
      catPrincipal: 'Computadoras',
      subCategorias: 'Notebook'

    },
    {
      id: '1',
      nombre: 'Procesadores',
      titulo: 'Procesadores',
      catPrincipal: 'Computadoras',
      subCategorias: 'PC'

    },
    {
      id: '2',
      nombre: 'REF',
      titulo: 'Uso',
      catPrincipal: 'Computadoras',
      subCategorias: 'Notebook'
    },
    {
      id: '3',
      nombre: 'Tarjetas gráficas',
      titulo: 'Tarjetas',
      catPrincipal: 'Computadoras',
      subCategorias: 'Notebook'
    },
    {
      id: '4',
      nombre: 'Tarjetas gráficas',
      titulo: 'Tarjetas',
      catPrincipal: 'Computadoras',
      subCategorias: 'PC'
    },
      {
      id: '5',
      nombre: 'Gabinetes',
      titulo: 'Componentes',
      catPrincipal: 'Computadoras',
      subCategorias: 'PC'
    },

    {
      id: '6',
      nombre: 'Acer',
      titulo: 'Marcas',
      catPrincipal: 'Computadoras',
      subCategorias: 'Notebook'
    },

    {
      id: '7',
      nombre: 'HP',
      titulo: 'Marcas',
      catPrincipal: 'Computadoras',
      subCategorias: 'Notebook'
    },
    {
      id: '8',
      nombre: 'Continua',
      titulo: 'Tipos',
      catPrincipal: 'Impresoras',
      subCategorias: 'Con tinta'
    },
    {
      id: '9',
      nombre: 'Scanner',
      titulo: 'Tipos',
      catPrincipal: 'Impresoras',
      subCategorias: 'Sin tinta'
    },
    {
      id: '10',
      nombre: 'Luces',
      titulo: 'Teclados',
      catPrincipal: 'Gaming',
      subCategorias: 'Teclado gamer'
    },
    {
      id: '11',
      nombre: 'Sin Luces',
      titulo: 'Teclados',
      catPrincipal: 'Gaming',
      subCategorias: 'Teclado gamer'
    }



  ];

  constructor() { }



  getFiltros() {

    return this.filtro;
  }

  getFiltroById(id: string): FiltroModel {
    return this.filtro.filter(x => x.id.toString() === id)[0];
  }

   getFiltrosBySubC(SubC: string) {


      this.filtroAny = this.filtro.filter(x => x.subCategorias === SubC );

      return this.filtroAny;

     }

     getFiltrosByCat(Categoria: string) {


      this.filtroAny = this.filtro.filter(x => x.catPrincipal === Categoria );

      return this.filtroAny;

     }
}
