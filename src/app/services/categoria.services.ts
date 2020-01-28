import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriaModel } from '../models/categoria.model';

@Injectable()
export class CategoriaService {
  private categorias: CategoriaModel[] = [
    {
      id: '0',
      nombre: 'Impresoras',
      catPrincipal: 'Impresoras',
      subCategorias: 'Con tinta',
      filtros: 'Nuevo'

    },
    {
      id: '1',
      nombre: 'Computadoras',
      catPrincipal: 'Impresoras',
      subCategorias: 'Impresoras',
      filtros: 'Impresoras'
    },
    {
      id: '2',
      nombre: 'Celulares',
      catPrincipal: 'Impresoras',
      subCategorias: 'Impresoras',
      filtros: 'Impresoras'
    },
    {
      id: '3',
      nombre: 'Componentes',
      catPrincipal: 'Impresoras',
      subCategorias: 'Impresoras',
      filtros: 'Impresoras'
    },
    {
      id: '4',
      nombre: 'Proyectores',
      catPrincipal: 'Impresoras',
      subCategorias: 'Impresoras',
      filtros: 'Impresoras'
    },
    {
      id: '5',
      nombre: 'Accesorios',
      catPrincipal: 'Impresoras',
      subCategorias: 'Impresoras',
      filtros: 'Impresoras'
    },
    {
      id: '6',
      nombre: 'Monitores',
      catPrincipal: 'Impresoras',
      subCategorias: 'Impresoras',
      filtros: 'Impresoras'

    },
    {
      id: '7',
      nombre: 'Seguridad',
      catPrincipal: 'Impresoras',
      subCategorias: 'Impresoras',
      filtros: 'Impresoras'
    },
    {
      id: '8',
      nombre: 'Games',
      catPrincipal: 'Impresoras',
      subCategorias: 'Impresoras',
      filtros: 'Impresoras'
    }

  ];

  public url = '';

  constructor(private http: HttpClient) {
    console.log('Hola');
  }

  getCategorias() {
    return this.categorias;
  }

  getCategoriaById(id: string): CategoriaModel {
    return this.categorias.filter(x => x.id.toString() === id)[0];
  }
}

