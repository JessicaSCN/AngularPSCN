import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from '../../../models/categoria.model';
import { ProductosService } from '../../../services/productos.services';
import { ProductoModel } from '../../../models/producto.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {

  productos: ProductoModel[];

  constructor(private activatedRoute: ActivatedRoute, productosService: ProductosService) {
    this.activatedRoute.params.subscribe( params => {
      this.productos = productosService.getProductos();
    });
  }

  ngOnInit() {
  }

}
