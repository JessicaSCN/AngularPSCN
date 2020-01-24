import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.services';
import { ProductoModel } from '../../models/producto.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {

  productos: ProductoModel[] = [];
  
  constructor(private productosService: ProductosService) {

  }

  ngOnInit() {
    this.productos = this.productosService.getProductos();

  }

}
