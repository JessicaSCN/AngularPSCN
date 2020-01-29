import { MarcaModel } from './marca.model';

export class CategoriaModel {

    id: string;
    nombre: string;
    catPrincipal: string;
    // tslint:disable-next-line: ban-types
    subCategorias: string[];
    filtros: string;

    constructor() {

    }
}
