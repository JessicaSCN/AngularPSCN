import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.services';
import { ProductoModel } from '../../models/producto.model';

@Component({
  selector: 'app-mailing',
  templateUrl: './mailing.component.html',
  styleUrls: ['./mailing.component.css']
})
export class MailingComponent implements OnInit {

  productos: ProductoModel[] = [];

  constructor(private productosService: ProductosService) {



  }


  ngOnInit() {
    this.productos = this.productosService.getProductosMailing();

  }

}
