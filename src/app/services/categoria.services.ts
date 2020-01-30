import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriaModel } from '../models/categoria.model';
// import { exists } from 'fs';

@Injectable()
export class CategoriaService {
  private categorias: CategoriaModel[] = [
    {
      id: '0',
      nombre: 'Impresoras',
      catPrincipal: 'Impresoras',
      subCategorias: ['Con tinta', 'Sin tinta' ],
      filtros: 'Nuevo'

    },
    {
      id: '1',
      nombre: 'Computadoras',
      catPrincipal: 'Computadoras',
      subCategorias:  ['PC', 'Notebook'],
      filtros: 'Impresoras'
    },
    {
      id: '2',
      nombre: 'Celulares',
      catPrincipal: 'Celulares',
      subCategorias: ['Xiaomi', 'Nokia'],
      filtros: 'Impresoras'
    },
    {
      id: '3',
      nombre: 'Componentes',
      catPrincipal: 'Componentes',
      subCategorias: ['Modem'],
      filtros: 'Impresoras'
    },
    {
      id: '4',
      nombre: 'Proyectores',
      catPrincipal: 'Proyectores',
      subCategorias: ['De pie' ],
      filtros: 'Impresoras'
    },
    {
      id: '5',
      nombre: 'Accesorios',
      catPrincipal: 'Accesorios',
      subCategorias: ['Auriculares', 'Mouse'],
      filtros: 'Impresoras'
    },
    {
      id: '6',
      nombre: 'Monitores',
      catPrincipal: 'Monitores',
      subCategorias: ['Grandes' ],
      filtros: 'Impresoras'

    },
    {
      id: '7',
      nombre: 'Seguridad',
      catPrincipal: 'Seguridad',
      subCategorias:  ['Camaras', 'Caja fuerte'],
      filtros: 'Impresoras'
    },
    {
      id: '8',
      nombre: 'Games',
      catPrincipal: 'Games',
      subCategorias: ['Teclado gamer', 'Silla gamer' ],
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

  getSubCategorias() {
    // tslint:disable-next-line: prefer-const
    let cat = new CategoriaModel();

    return cat.subCategorias;
  }

  getCategoriaById(id: string): CategoriaModel {
    return this.categorias.filter(x => x.id.toString() === id)[0];
  }
}

