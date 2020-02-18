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
  productFiltro: any[] = [];
  categoriaDatos: any[] = [];
  filtroDatos: any[] = [];

  mostrarFiltros: boolean;
  flag: boolean;

  constructor(private activatedRoute: ActivatedRoute, private categoriaService: CategoriaService, public productosService: ProductosService, public filtroService: FiltroService, public subcategoriaService: SubcategoriaService) {

    // this.activatedRoute.params.subscribe( params => {
    //   this.categoria = categoriaService.getCategoriaById(params.id); });

    this.categoriaDatos = this.productosService.getProductos();
    this.mostrarFiltros = false;
    this.flag = true;



  }

  ngOnInit() {
    this.categorias = this.categoriaService.getCategorias();
    this.subCategorias = this.subcategoriaService.getSubCategorias();
    this.mostrarFiltros = false;

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

  buscarProductoBySubC(subC: string) {

    console.log(subC);
    this.categoriaDatos = this.productosService.getPrBySubC( subC );

    return this.categoriaDatos;
  }

 // Ocultar categorias y mostrar filtros
toggle() {

return this.flag = false;

}


  // Filtros
  buscarFiltroBySubC(SubC: string) {

    if (this.mostrarFiltros === false) {

      console.log('Sub si es false' + SubC);

      this.mostrarFiltros = true;

      this.filtroDatos = this.filtroService.getFiltrosBySubC(SubC);

    } else {
      console.log('Sub si es true' + SubC);

      this.filtroDatos = this.filtroService.getFiltrosBySubC(SubC);

    }

    console.log(this.filtroDatos);
    return this.filtroDatos;
  }

  buscarFiltroByCat(Categoria: string) {

      this.filtroDatos = this.filtroService.getFiltrosByCat(Categoria);

      console.log(this.filtroDatos);
      return this.filtroDatos;
  }





}
