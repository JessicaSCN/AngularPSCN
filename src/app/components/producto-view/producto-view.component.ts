import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.services';
import { ProductoModel } from '../../models/producto.model';
import { CategoriaService } from '../../services/categoria.services';
import { CategoriaModel } from 'src/app/models/categoria.model';

@Component({
  selector: 'app-producto-view',
  templateUrl: './producto-view.component.html'
})
export class ProductoViewComponent  {

  producto: ProductoModel = null;

  categorias: CategoriaModel[];

  constructor(private activatedRoute: ActivatedRoute, private  productoService: ProductosService, categoriaService: CategoriaService) {

        this.activatedRoute.params.subscribe( params => {
          this.producto = productoService.getProductoById(params.id);
        });

  }

}
