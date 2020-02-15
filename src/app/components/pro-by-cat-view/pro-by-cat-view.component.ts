import { Component, OnInit, Input } from '@angular/core';
import { CategoriaModel } from 'src/app/models/categoria.model';
import { ProductoModel } from 'src/app/models/producto.model';
import { FiltroService } from 'src/app/services/filtro.service';
import { SubcategoriaService } from 'src/app/services/subcategoria.service';
import { CategoriaService } from 'src/app/services/categoria.services';
import { ProductosService } from 'src/app/services/productos.services';
import { ActivatedRoute } from '@angular/router';
import { FiltroModel } from '../../models/filtro.model';

@Component({
  selector: 'app-pro-by-cat-view',
  templateUrl: './pro-by-cat-view.component.html',
  styleUrls: ['./pro-by-cat-view.component.css']
})
export class ProByCatViewComponent implements OnInit {

  // categorias: CategoriaModel[] = [];
  // productos: ProductoModel[] = [];

  @Input() categoria: CategoriaModel[] = [];
  @Input() filtroP: FiltroModel[] = [];


  constructor(public activatedRoute: ActivatedRoute, public productosService: ProductosService, private categoriaService: CategoriaService, private subcategoriaService: SubcategoriaService, public filtroService: FiltroService) { 
    // this.activatedRoute.params.subscribe( params => {
    //   this.productos = productosService.getPrByCat(params.categorias.catPrincipal);
    // });


  }

  ngOnInit() {
    // this.productos = this.productosService.getPrByCat(CategoriaModel);
      // this.activatedRoute.params.subscribe( params => {

      //     console.log(params);

      //     this.productos = this.productosService.getPrByCat('Monitores');
    //  });

      // this.categorias = this.categoriaService.getCategorias();
  }



}
