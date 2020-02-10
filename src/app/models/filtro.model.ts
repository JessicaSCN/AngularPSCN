import { MarcaModel } from './marca.model';
import { SubcategoriaModel } from './subcategoria.model';

export class FiltroModel {

    id: string;
    nombre: string;
    titulo: string;
    catPrincipal: string;
    // tslint:disable-next-line: ban-types
    subCategorias: string;

    constructor() {

    }
}
