import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriaModel } from '../models/categoria.model';

@Injectable()
export class CategoriaService {
  private categorias: CategoriaModel[] = [
    {
      id: '0',
      nombre: 'Cocina',
    },
    {
      id: '1',
      nombre: 'Indumentaria',
    },
    {
      id: '2',
      nombre: 'Informatica',
    },
    {
      id: '3',
      nombre: 'Hogar',
    }
  ];

  public url = '';

  constructor(private http: HttpClient) {
    console.log('Hola');
  }

  getCategorias() {
    return this.categorias;
  };

  getCategoriaById(id: string): CategoriaModel {
    return this.categorias.filter(x => x.id.toString() == id)[0];
  }
}

