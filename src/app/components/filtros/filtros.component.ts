import { Component, OnInit } from '@angular/core';
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

  filtros: FiltroModel[] = [];

  constructor(private productosService: ProductosService, private categoriaService: CategoriaService, private subcategoriaService: SubcategoriaService, private filtroService: FiltroService) { }

  ngOnInit() {

    this.filtros = this.filtroService.getFiltrosBySubC('Computadoras');


  }

}
