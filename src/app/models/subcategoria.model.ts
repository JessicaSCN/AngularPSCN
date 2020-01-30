import { CategoriaModel } from './categoria.model';

export class SubcategoriaModel {

    id: string;
    nombre: string;
    catPrincipal: string;
    // tslint:disable-next-line: ban-types
    filtros: string;

    constructor() {

    }
}