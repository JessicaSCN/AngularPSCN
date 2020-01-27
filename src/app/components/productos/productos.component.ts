import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductosService } from '../../services/productos.services';
import { ProductoModel } from '../../models/producto.model';
import { CategoriaComponent } from '../categoria/categoria.component';
import { CategoriaModel } from '../../models/categoria.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {

  productos: ProductoModel[] = [];
  categorias: CategoriaModel[] = [];
  constructor(private productosService: ProductosService) {

  }


  ngOnInit() {

    this.productos = this.productosService.getProductos();
    this.productos = this.productosService.getPrByCat(Event, this.categoria);


  }


}
