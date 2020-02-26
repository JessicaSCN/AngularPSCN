import { Component, OnInit } from '@angular/core';
import { MarcaModel } from 'src/app/models/marca.model';
import { CategoriaModel } from 'src/app/models/categoria.model';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.services';
import { MarcasService } from 'src/app/services/marcas.services';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-alta-marca',
  templateUrl: './alta-marca.component.html',
  styleUrls: ['./alta-marca.component.css']
})
export class AltaMarcaComponent implements OnInit {

  marca: MarcaModel = new MarcaModel();

  marcas: MarcaModel[];
  categorias: CategoriaModel[];

  constructor(private activatedRoute: ActivatedRoute, categoriaService: CategoriaService, marcaService: MarcasService) {
    // tslint:disable-next-line: deprecation
    this.activatedRoute.params.subscribe( params => {
      this.marcas = marcaService.getMarcas(),
      this.categorias = categoriaService.getCategorias();

    });
   }

  ngOnInit() {
  }

  altaMarca( form: NgForm) {

    console.log(form);
    console.log(this.marcas);


  }

}
