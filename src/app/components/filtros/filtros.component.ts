import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FiltroModel } from 'src/app/models/filtro.model';
import { ProductosService } from 'src/app/services/productos.services';
import { FiltroService } from '../../services/filtro.service';
import { SubcategoriaService } from 'src/app/services/subcategoria.service';
import { CategoriaService } from 'src/app/services/categoria.services';


@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  // filtros: FiltroModel[] = [];
  // mostrarFiltros: boolean;

  @Input() filtro: FiltroModel[] = [];
  mostrarFiltros: boolean;
  productFiltro: any[] = [];
  nombrefiltros: string[] = [];


  constructor(private productosService: ProductosService, private categoriaService: CategoriaService, private subcategoriaService: SubcategoriaService, private filtroService: FiltroService) {

    this.mostrarFiltros = false;

  }

  ngOnInit() {

    // this.filtros = this.filtroService.getFiltrosBySubC('Computadoras');
    // this.filtros = this.filtroService.getFiltros();
  }

  agregar(data: string) { // Agregamos el elemento
    this.nombrefiltros.push(data);
  }

  quitar(data) { // Filtramos el elemento para que quede fuera
    this.nombrefiltros = this.nombrefiltros.filter(s => s !== data);
  }

  buscarProductoByFiltroChecked(filtro: string) {

    console.log(filtro);
    this.productFiltro = this.productosService.getPrByFiltro( filtro );

    return this.productFiltro;

  }




}
