import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoriaModel } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.services';
import { ProductosComponent } from '../productos/productos.component';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categoria: CategoriaModel[] = [];

  constructor(private categoriaService: CategoriaService) {

  }

  ngOnInit() {
    this.categoria = this.categoriaService.getCategorias();
  }

}
