import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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


  filtros: FiltroModel[] = [];

  constructor(private productosService: ProductosService, private categoriaService: CategoriaService, private subcategoriaService: SubcategoriaService, private filtroService: FiltroService) { }

  ngOnInit() {

    // this.filtros = this.filtroService.getFiltrosBySubC('Computadoras');
    this.filtros = this.filtroService.getFiltros();
  }

  // onPropagar() {
  //   this.propagar.emit(this.filtros);
  // }

}
