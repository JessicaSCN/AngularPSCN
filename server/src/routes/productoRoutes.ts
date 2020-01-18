import { Router } from 'express';

class ProductoRoutes {

    public router: Router = Router();

    constructor() {
        this.config();

    }

    config() {
        this.router.get('/', (req, res) => res.send('Producto'));
    }
}

const productoRoutes = new ProductoRoutes();
export default productoRoutes.router;
