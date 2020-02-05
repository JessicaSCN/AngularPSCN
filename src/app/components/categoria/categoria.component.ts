import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoriaModel } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.services';
import { ProductosComponent } from '../productos/productos.component';
import { ProductosService } from '../../services/productos.services';
import { FiltroService } from 'src/app/services/filtro.service';
import { SubcategoriaModel } from 'src/app/models/subcategoria.model';
import { SubcategoriaService } from '../../services/subcategoria.service';
import { Observable } from 'rxjs';
import { ProductoModel } from 'src/app/models/producto.model';
import { ActivatedRoute } from '@angular/router';
import { FiltroModel } from '../../models/filtro.model';
import { FiltrosComponent } from '../filtros/filtros.component';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  // producto$: Observable<ProductoModel[]>;
  categorias: CategoriaModel[] = [];
  categoria: CategoriaModel = null;
  subCategorias: SubcategoriaModel[] = [];
  filtro: FiltroModel = null;
  filtros: FiltroModel[] = [];

  categoriaDatos: any[] = [];
  filtroDatos: any[] = [];
  mostrarFiltros: boolean;

  constructor(private activatedRoute: ActivatedRoute, private categoriaService: CategoriaService, public productosService: ProductosService, public filtroService: FiltroService, public subcategoriaService: SubcategoriaService) {

    // this.activatedRoute.params.subscribe( params => {
    //   this.categoria = categoriaService.getCategoriaById(params.id); });

    this.categoriaDatos = this.productosService.getProductos();
    this.mostrarFiltros = false;



  }

  ngOnInit() {
    this.categorias = this.categoriaService.getCategorias();
    this.subCategorias = this.subcategoriaService.getSubCategorias();

    // Observable suscripcion
    // this.clientes$ = this.clientesService.getClientes$();
    // this.clientes$.subscribe(clientes => this.clientes = clientes);
  }

// Categoria
  buscarProducto( categoria: string) {

    console.log(categoria);
    this.categoriaDatos = this.productosService.getPrByCat( categoria );

    return this.categoriaDatos;

  }

  // Filtros
  getFiltrosBySubC(SubC: string) {

    console.log(SubC);
    this.mostrarFiltros = true;
    this.filtroDatos = this.filtros.filter(x => x.subCategorias === SubC);

    return this.filtroDatos;
  }

}
