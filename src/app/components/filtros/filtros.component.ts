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

  // @Output()
  // propagar = new EventEmitter<FiltroModel[]>();

// Llamar una funcion al presionar el a de subC en Categorias.
// Pasarle la subC por parametro y filtrar los filtros por esa subC.
// Pasar la variable a true.
// En html filtros escribir un ngif que permita mostrar los respectivos filtros.

  // filtros: FiltroModel[] = [];
  // mostrarFiltros: boolean;

  @Input() filtro: FiltroModel[] = [];
  mostrarFiltros: boolean;


  constructor(private productosService: ProductosService, private categoriaService: CategoriaService, private subcategoriaService: SubcategoriaService, private filtroService: FiltroService) {

    this.mostrarFiltros = false;

  }

  ngOnInit() {

    // this.filtros = this.filtroService.getFiltrosBySubC('Computadoras');
    // this.filtros = this.filtroService.getFiltros();
  }



}
