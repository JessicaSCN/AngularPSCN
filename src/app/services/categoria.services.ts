import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriaModel } from '../models/categoria.model';

@Injectable()
export class CategoriaService {
  private categorias: CategoriaModel[] = [
    {
      id: '0',
      nombre: 'Impresoras',
    },
    {
      id: '1',
      nombre: 'Computadoras',
    },
    {
      id: '2',
      nombre: 'Celulares',
    },
    {
      id: '3',
      nombre: 'Componentes',
    },
    {
      id: '4',
      nombre: 'Proyectores',
    },
    {
      id: '5',
      nombre: 'Accesorios',
    },
    {
      id: '6',
      nombre: 'Monitores',
    },
    {
      id: '7',
      nombre: 'Seguridad',
    },
    {
      id: '8',
      nombre: 'Games',
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

