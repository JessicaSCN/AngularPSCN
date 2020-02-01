import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoriaModel } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.services';
import { ProductosComponent } from '../productos/productos.component';
import { ProductosService } from '../../services/productos.services';
import { FiltroService } from 'src/app/services/filtro.service';
import { SubcategoriaModel } from 'src/app/models/subcategoria.model';
import { SubcategoriaService } from '../../services/subcategoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categorias: CategoriaModel[] = [];
  subC: SubcategoriaModel[] = [];

  constructor(private categoriaService: CategoriaService, public productosService: ProductosService, public filtroService: FiltroService, public subcategoriaService: SubcategoriaService) {

  }

  ngOnInit() {
    this.categorias = this.categoriaService.getCategorias();
    this.subC = this.subcategoriaService.getSubCategorias();
  }

}
