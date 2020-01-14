import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarcaModel } from '../models/marca.model';

@Injectable()
export class MarcasService {

  private marcas: MarcaModel[] = [
    {
      id: '0',
      nombre: 'Sony', img: 'assets/img/marcas/sony.png'
    },
    {
      id: '1',
      nombre: 'Iphone', img: 'assets/img/marcas/iphone.jpg'
    },
    {
      id: '2',
    nombre: 'Xiaomi', img: 'assets/img/marcas/xiaomi.jpg'
    },
    {
      id: '3',
      nombre: 'Microsoft', img: 'assets/img/marcas/microsoft.jpg'
    }
  ];

  public url = '';

  constructor(private http: HttpClient) {
    console.log('Hola');
  }

  getMarcas() {
    return this.marcas;
  }

  getCategoriaById(id: string): MarcaModel {
    return this.marcas.filter(x => x.id.toString() == id)[0];
  }
}

