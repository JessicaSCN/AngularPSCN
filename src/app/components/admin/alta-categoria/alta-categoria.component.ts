import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoriaService } from '../../../services/categoria.services';
import { CategoriaModel } from '../../../models/categoria.model';
import { ActivatedRoute } from '@angular/router';
import { MarcasService } from '../../../services/marcas.services';
import { MarcaModel } from '../../../models/marca.model';
import { CategoriaComponent } from '../../categoria/categoria.component';

@Component({
  selector: 'app-alta-categoria',
  templateUrl: './alta-categoria.component.html',
  styleUrls: ['./alta-categoria.component.css']
})
export class AltaCategoriaComponent implements OnInit {

  categoria: CategoriaModel = new CategoriaModel();

  categorias: CategoriaModel[];
  marcas: MarcaModel[];

  constructor(private activatedRoute: ActivatedRoute, categoriaService: CategoriaService, marcaService: MarcasService) {

      // tslint:disable-next-line: deprecation
      this.activatedRoute.params.subscribe( params => {
      this.marcas = marcaService.getMarcas(),
      this.categorias = categoriaService.getCategorias();

  });
}

  ngOnInit() {

  }

  altaCategoria( form: NgForm) {

    console.log(form);
    console.log(this.categorias);


  }

}
