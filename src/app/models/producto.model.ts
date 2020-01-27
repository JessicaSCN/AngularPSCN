import { MarcaModel } from './marca.model';
import { CategoriaModel } from './categoria.model';
export class ProductoModel {


        id: string;
        nombre: string;
        descripcion: string;
        img: string;
        precio: number;
        procentajeDescuento: number;
        marca: MarcaModel;
        activo: boolean;
        categoria: CategoriaModel;
        mailing: boolean;
        oferta: boolean;

        constructor() {
                this.activo = true;
                this.mailing = false;
                this.marca = new MarcaModel();
                this.categoria = new CategoriaModel();
        }
    
}
