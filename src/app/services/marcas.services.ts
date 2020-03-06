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

  selectedMarca: MarcaModel;
  marcas: MarcaModel[];
  readonly URL_API = 'http://localhost:3000/api/marcas';

  public url = '';

  constructor(private http: HttpClient) {

  }

  // getMarcas() {
  //   return this.marcas;
  // }

  // Http server

  getMarcas() {
    return this.http.get(this.URL_API);

  }

postMarca(Marca: MarcaModel) {
  return this.http.post(this.URL_API, Marca);

}

putMarca(marca: MarcaModel) {
  return this.http.put(this.URL_API + `/${marca.id}`, marca);

}

deleteMarca(id: string) {
  return this.http.delete(this.URL_API + `/${id}`);

}

  getCategoriaById(id: string): MarcaModel {
    return this.marcas.filter(x => x.id.toString() == id)[0];
  }
}

