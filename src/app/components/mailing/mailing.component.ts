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
  productosM = this.productosService.getProductosMailing();

  constructor(private productosService: ProductosService) {



  }


  ngOnInit() {
    this.productosService.getProductosMailing();

  }

}
