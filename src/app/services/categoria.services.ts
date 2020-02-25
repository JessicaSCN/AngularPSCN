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
      filtros: 'Brother'

    },
    {
      id: '1',
      nombre: 'Computadoras',
      catPrincipal: 'Computadoras',
      subCategorias:  ['PC', 'Notebook'],
      filtros: 'REF'
    },
    {
      id: '2',
      nombre: 'Celulares',
      catPrincipal: 'Celulares',
      subCategorias: ['Xiaomi', 'Nokia'],
      filtros: 'Octa-Core'
    },
    {
      id: '3',
      nombre: 'Componentes',
      catPrincipal: 'Componentes',
      subCategorias: ['Modem'],
      filtros: 'Antenas'
    },
    {
      id: '4',
      nombre: 'Proyectores',
      catPrincipal: 'Proyectores',
      subCategorias: ['De pie' ],
      filtros: 'Acer'
    },
    {
      id: '5',
      nombre: 'Accesorios',
      catPrincipal: 'Accesorios',
      subCategorias: ['Auriculares', 'Mouse'],
      filtros: 'Azul'
    },
    {
      id: '6',
      nombre: 'Monitores',
      catPrincipal: 'Monitores',
      subCategorias: ['Grandes' ],
      filtros: 'LED'

    },
    {
      id: '7',
      nombre: 'Seguridad',
      catPrincipal: 'Seguridad',
      subCategorias:  ['Camaras', 'Caja fuerte'],
      filtros: 'Alarmas'
    },
    {
      id: '8',
      nombre: 'Gaming',
      catPrincipal: 'Gaming',
      subCategorias: ['Teclado gamer', 'Silla gamer' ],
      filtros: 'Nintendo Switch Lite'
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

