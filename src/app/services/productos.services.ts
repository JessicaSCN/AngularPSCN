import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoModel } from '../models/producto.model';
import { ProductosComponent } from '../components/productos/productos.component';
import { MailingComponent } from '../components/mailing/mailing.component';
import { CategoriaModel } from '../models/categoria.model';

@Injectable()
export class ProductosService {
  public productos: ProductoModel[] = [
    {
      id: '0',
      nombre: 'Xbox',
      descripcion:
        'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
      img: 'assets/img/xbox.jpg',
      precio: 350,
      procentajeDescuento: 10,
      marca: { id: '0', nombre: 'Microsoft', img: 'assets/img/marcas/microsoft.jpg' }
      , activo: true,
      categoria: {nombre: 'Hogar' , id: '1', catPrincipal: 'Hogar', subCategorias: 'Hogar', filtros: 'Nuevo'},
      mailing: false,
      oferta: false

    },
    {
      id: '1',
      nombre: 'Television',
      descripcion:
        'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
      img: 'assets/img/television.jpg',
      precio: 399,
      procentajeDescuento: 10,
      marca: { id: '1'  , nombre: 'Sony', img: 'assets/img/marcas/sony.png' }
      , activo: true,
      categoria: {nombre: 'Hogar' , id: '1', catPrincipal: 'Hogar', subCategorias: 'Hogar', filtros: 'Nuevo'},
      mailing: true,
      oferta: false
    },
    {
      id: '2',
      nombre: 'Celular Xiaomi',
      descripcion:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero elit, vehicula sit amet condimentum ut, commodo a sapien. Suspendisse vitae tellus sit amet magna pellentesque faucibus in vel diam. Nam aliquam, eros eget aliquet laoreet, velit ipsum tincidunt eros, quis imperdiet sem lacus in dolor. Curabitur vel massa varius, volutpat purus et, consequat nisl. Etiam efficitur, arcu vitae faucibus vehicula.',
      img: 'assets/img/Xiaomi.jpg',
      precio: 199,
      procentajeDescuento: 10,
      marca: { id: '2', nombre: 'Xiaomi', img: 'assets/img/marcas/xiaomi.jpg' }
      , activo: true,
      categoria: {nombre: 'Hogar' , id: '1', catPrincipal: 'Hogar', subCategorias: 'Hogar', filtros: 'Nuevo'},
      mailing: false,
      oferta: true
    },
    {
      id: '3',
      nombre: 'Iphone',
      // tslint:disable-next-line: max-line-length
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero elit, vehicula sit amet condimentum ut, commodo a sapien. Suspendisse vitae tellus sit amet magna pellentesque faucibus in vel diam. Nam aliquam, eros eget aliquet laoreet, velit ipsum tincidunt eros, quis imperdiet sem lacus in dolor. Curabitur vel massa varius, volutpat purus et, consequat nisl. Etiam efficitur, arcu vitae faucibus vehicula, magna felis maximus arcu, ac commodo ex augue efficitur odio. Cras porttitor metus ac libero interdum, nec dapibus nisi mollis. Vivamus sodales felis arcu, quis finibus lectus aliquet eget.' ,
      img: 'assets/img/iphone.jfif',
      precio: 899,
      procentajeDescuento: 10,
      marca: { id: '3' , nombre: 'Iphone', img: 'assets/img/marcas/iphone.jpg' }
      , activo: true,
      categoria: {nombre: 'Hogar' , id: '1', catPrincipal: 'Hogar', subCategorias: 'Hogar', filtros: 'Nuevo'},
      mailing: true,
      oferta: false
    },
    {
      id: '4',
      nombre: 'Ps4',
      descripcion:
        // tslint:disable-next-line: max-line-length
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero elit, vehicula sit amet condimentum ut, commodo a sapien. Suspendisse vitae tellus sit amet magna pellentesque faucibus in vel diam. Nam aliquam, eros eget aliquet laoreet, velit ipsum tincidunt eros, quis imperdiet sem lacus in dolor. Curabitur vel massa varius, volutpat purus et, consequat nisl. Etiam efficitur, arcu vitae faucibus vehicula, magna felis maximus arcu, ac commodo ex augue efficitur odio. Cras porttitor metus ac libero interdum, nec dapibus nisi mollis. Vivamus sodales felis arcu, quis finibus lectus aliquet eget.',
      img: 'assets/img/ps4.png',
      precio: 599,
      procentajeDescuento: 10,
      marca: { id: '1' , nombre: 'Sony', img: 'assets/img/marcas/sony.png' }
      , activo: true,
      categoria: {nombre: 'Hogar' , id: '1', catPrincipal: 'Hogar', subCategorias: 'Hogar', filtros: 'Nuevo'},
      mailing: true,
      oferta: false
    }
  ];

  public url = '';

  constructor(private http: HttpClient) {
    console.log('ProductosService ');
  }

          // Productos

  saveProducto() {

    // this.http.post()

  }

  getProductos() {
    return this.productos;
  }

  getProductosMailing() {
    return this.productos.filter(x => x.mailing === true);

  }

  getProductosOferta() {
    return this.productos.filter(x => x.oferta === true);

  }

  getProductoById(id: string): ProductoModel {
    return this.productos.filter(x => x.id.toString() === id)[0];
  }


     // Categorias

     getPrByCat(Event, Categoria: CategoriaModel) {
      return this.productos.filter(x => x.categoria.catPrincipal === Categoria.catPrincipal);
     }

}

