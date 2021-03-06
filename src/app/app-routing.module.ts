import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoViewComponent } from './components/producto-view/producto-view.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { ListadoProductosComponent } from './components/admin/listado-productos/listado-productos.component';
import { CrearProductoComponent } from './components/admin/crear-producto/crear-producto.component';
import { AltaListadoCategoriaComponent } from './components/admin/alta-listado-categoria/alta-listado-categoria.component';
import { MailingComponent } from './components/mailing/mailing.component';
import { OfertaComponent } from './components/oferta/oferta.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { AltaCategoriaComponent } from './components/admin/alta-categoria/alta-categoria.component';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ProByCatViewComponent } from './components/pro-by-cat-view/pro-by-cat-view.component';
import { AltaMarcaComponent } from './components/admin/alta-marca/alta-marca.component';
import { ListadoMarcasComponent } from './components/admin/listado-marcas/listado-marcas.component';
import { ProByFiltroComponent } from './components/pro-by-filtro/pro-by-filtro.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent }, // canActivate: [AuthGuard]
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'productos', component: ProductosComponent },
   { path: 'producto/:id', component: ProductoViewComponent },
   { path: 'productos/:categoria', component: ProByCatViewComponent },
   { path: 'productos/:filtro', component: ProByCatViewComponent },
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent },
   { path: 'admin/listado-productos', component: ListadoProductosComponent },
   { path: 'admin/producto/nuevo', component: CrearProductoComponent },
   { path: 'admin/listado-categorias', component: AltaListadoCategoriaComponent },
   { path: 'admin/categoria/nuevo', component: AltaCategoriaComponent },
   { path: 'admin/alta-marca', component: AltaMarcaComponent },
   { path: 'admin/listado-marcas', component: ListadoMarcasComponent },
   { path: 'mailing', component: MailingComponent },
   { path: 'oferta', component: OfertaComponent },
   { path: 'servicios', component: ServiciosComponent },
  // { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
