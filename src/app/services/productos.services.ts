import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoModel } from '../models/producto.model';
import { ProductosComponent } from '../components/productos/productos.component';
import { MailingComponent } from '../components/mailing/mailing.component';
import { CategoriaModel } from '../models/categoria.model';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable()
export class ProductosService {

  private producto$ = new Subject<ProductoModel[]>();

  producto: any[] = [];

  public productos: ProductoModel[] = [
    {
      id: '0',
      nombre: 'Xbox',
      descripcion:
        'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
      img: 'assets/img/Gaming/xbox.jpg',
      precio: 350,
      procentajeDescuento: 10,
      marca: { id: '0', nombre: 'Microsoft', img: 'assets/img/marcas/microsoft.jpg' }
      , activo: true,
      categoria: {nombre: 'Consolas' , id: '0', catPrincipal: 'Gaming', subCategorias: ['Consola' ], filtros: 'Xbox'},
      mailing: false,
      oferta: false

    },
    {
      id: '1',
      nombre: 'Television',
      descripcion:
        'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
      img: 'assets/img/Monitores/television.jpg',
      precio: 399,
      procentajeDescuento: 10,
      marca: { id: '1'  , nombre: 'Sony', img: 'assets/img/marcas/sony.png' }
      , activo: true,
      categoria: {nombre: 'Monitores' , id: '1', catPrincipal: 'Monitores', subCategorias: ['Grandes' ], filtros: 'Zh'},
      mailing: true,
      oferta: false
    },
    {
      id: '2',
      nombre: 'Celular Xiaomi',
      descripcion:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero elit, vehicula sit amet condimentum ut, commodo a sapien. Suspendisse vitae tellus sit amet magna pellentesque faucibus in vel diam. Nam aliquam, eros eget aliquet laoreet, velit ipsum tincidunt eros, quis imperdiet sem lacus in dolor. Curabitur vel massa varius, volutpat purus et, consequat nisl. Etiam efficitur, arcu vitae faucibus vehicula.',
      img: 'assets/img/Celulares/Xiaomi.jpg',
      precio: 199,
      procentajeDescuento: 10,
      marca: { id: '2', nombre: 'Xiaomi', img: 'assets/img/marcas/xiaomi.jpg' }
      , activo: true,
      categoria: {nombre: 'Hogar' , id: '2', catPrincipal: 'Celulares', subCategorias: ['Xiaomi' ], filtros: 'Nuevo'},
      mailing: false,
      oferta: true
    },
    {
      id: '3',
      nombre: 'Iphone',
      // tslint:disable-next-line: max-line-length
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero elit, vehicula sit amet condimentum ut, commodo a sapien. Suspendisse vitae tellus sit amet magna pellentesque faucibus in vel diam. Nam aliquam, eros eget aliquet laoreet, velit ipsum tincidunt eros, quis imperdiet sem lacus in dolor. Curabitur vel massa varius, volutpat purus et, consequat nisl. Etiam efficitur, arcu vitae faucibus vehicula, magna felis maximus arcu, ac commodo ex augue efficitur odio. Cras porttitor metus ac libero interdum, nec dapibus nisi mollis. Vivamus sodales felis arcu, quis finibus lectus aliquet eget.' ,
      img: 'assets/img/Celulares/iphone.jfif',
      precio: 899,
      procentajeDescuento: 10,
      marca: { id: '3' , nombre: 'Iphone', img: 'assets/img/marcas/iphone.jpg' }
      , activo: true,
      categoria: {nombre: 'Hogar' , id: '3', catPrincipal: 'Celulares', subCategorias: ['Hogar' ], filtros: 'Nuevo'},
      mailing: true,
      oferta: false
    },
    {
      id: '4',
      nombre: 'Ps4',
      descripcion:
        // tslint:disable-next-line: max-line-length
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero elit, vehicula sit amet condimentum ut, commodo a sapien. Suspendisse vitae tellus sit amet magna pellentesque faucibus in vel diam. Nam aliquam, eros eget aliquet laoreet, velit ipsum tincidunt eros, quis imperdiet sem lacus in dolor. Curabitur vel massa varius, volutpat purus et, consequat nisl. Etiam efficitur, arcu vitae faucibus vehicula, magna felis maximus arcu, ac commodo ex augue efficitur odio. Cras porttitor metus ac libero interdum, nec dapibus nisi mollis. Vivamus sodales felis arcu, quis finibus lectus aliquet eget.',
      img: 'assets/img/Gaming/ps4.png',
      precio: 599,
      procentajeDescuento: 10,
      marca: { id: '4' , nombre: 'Sony', img: 'assets/img/marcas/sony.png' }
      , activo: true,
      categoria: {nombre: 'Hogar' , id: '4', catPrincipal: 'Gaming', subCategorias: [ 'Hogar' ], filtros: 'Nuevo'},
      mailing: true,
      oferta: false
    },
    {
      id: '5',
      nombre: 'Teclado cougar',
      descripcion:
        // tslint:disable-next-line: max-line-length
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero elit, vehicula sit amet condimentum ut, commodo a sapien. Suspendisse vitae tellus sit amet magna pellentesque faucibus in vel diam. Nam aliquam, eros eget aliquet laoreet, velit ipsum tincidunt eros, quis imperdiet sem lacus in dolor. Curabitur vel massa varius, volutpat purus et, consequat nisl. Etiam efficitur, arcu vitae faucibus vehicula, magna felis maximus arcu, ac commodo ex augue efficitur odio. Cras porttitor metus ac libero interdum, nec dapibus nisi mollis. Vivamus sodales felis arcu, quis finibus lectus aliquet eget.',
      img: 'assets/img/Gaming/tecladog.png',
      precio: 89,
      procentajeDescuento: 10,
      marca: { id: '5' , nombre: 'Cougar', img: 'assets/img/marcas/sony.png' }
      , activo: true,
      categoria: {nombre: 'Gaming' , id: '5', catPrincipal: 'Gaming', subCategorias: [ 'Teclado gamer' ], filtros: 'Luces'},
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

  // agregarCliente(productos: ProductoModel[]) {
  //   this.productos.push(productos);
  //   this.producto$.next(this.productos);
  // }

  // getClientes$(): Observable<Cliente[]> {
  //   return this.clientes$.asObservable();
  // }

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

     getPrByCat(Categoria: string) {

      // console.log('Categoria click',Categoria);


      this.producto = this.productos.filter(x => x.categoria.catPrincipal === Categoria );

      // console.log('Producto return', this.producto);

      return this.producto;

     }

     getPrBySubC(Subc: string) {

      this.producto = this.productos.filter(x => x.categoria.subCategorias[0] === Subc );

      console.log('Producto por subCategoria', this.producto);

      return this.producto;

     }

     getPrByFiltro(Filtro: string) {

      this.producto = this.productos.filter(x => x.categoria.filtros === Filtro);

      console.log('Producto filtrado' + this.producto);
      return this.producto;
     }

}

