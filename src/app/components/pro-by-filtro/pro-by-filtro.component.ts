import { Component, OnInit, Input } from '@angular/core';
import { FiltroModel } from 'src/app/models/filtro.model';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.services';
import { FiltroService } from 'src/app/services/filtro.service';
import { SubcategoriaService } from 'src/app/services/subcategoria.service';
import { CategoriaService } from 'src/app/services/categoria.services';

@Component({
  selector: 'app-pro-by-filtro',
  templateUrl: './pro-by-filtro.component.html',
  styleUrls: ['./pro-by-filtro.component.css']
})
export class ProByFiltroComponent implements OnInit {

  @Input() filtroP: FiltroModel[] = [];

  constructor(public activatedRoute: ActivatedRoute, public productosService: ProductosService, private categoriaService: CategoriaService, private subcategoriaService: SubcategoriaService, public filtroService: FiltroService) { }

  ngOnInit() {
  }

}
