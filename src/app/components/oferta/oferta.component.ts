import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.services';
import { ProductoModel } from '../../models/producto.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {

  productos: ProductoModel[] = [];

  constructor(private productosService: ProductosService) {



  }

  ngOnInit() {
    this.productos = this.productosService.getProductosOferta();
  }

}
