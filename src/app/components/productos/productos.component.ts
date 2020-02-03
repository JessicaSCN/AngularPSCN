import { Component, OnInit, EventEmitter } from '@angular/core';
import { ProductosService } from '../../services/productos.services';
import { ProductoModel } from '../../models/producto.model';
import { CategoriaComponent } from '../categoria/categoria.component';
import { CategoriaModel } from '../../models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.services';
import { Observable } from 'rxjs';
import { SubcategoriaService } from '../../services/subcategoria.service';
import { FiltroService } from 'src/app/services/filtro.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
  // providers: [FiltroService]
})
export class ProductosComponent implements OnInit {

categorias: CategoriaModel[] = [];
  productos: ProductoModel[] = [];
  // proCat: ProductoModel[] = this.getPrByCat(this.categorias);

  constructor(public productosService: ProductosService, private categoriaService: CategoriaService, private subcategoriaService: SubcategoriaService, public filtroService: FiltroService) {

  }

  procesaPropagar(mensaje) {
    console.log(mensaje);
  }

   getPrByCat(Categoria: CategoriaModel) {
      console.log('ENTRA');
      return this.productos.filter(x => x.categoria.catPrincipal === Categoria.catPrincipal);
     }


  ngOnInit() {

    this.productos = this.productosService.getProductos();
    this.categorias = this.categoriaService.getCategorias();
  }


}
