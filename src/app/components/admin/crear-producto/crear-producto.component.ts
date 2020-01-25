import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductoModel } from '../../../models/producto.model';
import { CategoriaService } from '../../../services/categoria.services';
import { CategoriaModel } from '../../../models/categoria.model';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../../services/productos.services';
import { MarcasService } from '../../../services/marcas.services';
import { MarcaModel } from '../../../models/marca.model';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  producto: ProductoModel = new ProductoModel();

  categorias: CategoriaModel[];
  marcas: MarcaModel[];



  constructor( private activatedRoute: ActivatedRoute, private  productoService: ProductosService, categoriaService: CategoriaService, marcaService: MarcasService) {

    this.activatedRoute.params.subscribe( params => {
      this.categorias = categoriaService.getCategorias();
      this.marcas = marcaService.getMarcas();
    });
  }

  ngOnInit() {
  }

  altaProducto( form: NgForm) {

    console.log(form);
    console.log(this.producto);


  }

}
