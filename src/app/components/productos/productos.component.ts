import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductosService } from '../../services/productos.services';
import { ProductoModel } from '../../models/producto.model';
import { CategoriaComponent } from '../categoria/categoria.component';
import { CategoriaModel } from '../../models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {

  productos: ProductoModel[] = [];
  categorias: CategoriaModel[] = [];


  
  
  constructor(private productosService: ProductosService) {

  }

  click() {
    console.log('Funciona');
  }

  getPrByCat(event: Event, Categoria: CategoriaModel) {
    return this.productos.filter(x => x.categoria.catPrincipal === Categoria.catPrincipal);
   }

  ngOnInit() {

    this.productos = this.productosService.getProductos();

  }


}
