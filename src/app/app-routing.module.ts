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


const routes: Routes = [
  { path: 'home', component: HomeComponent }, // canActivate: [AuthGuard]
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'productos', component: ProductosComponent },
   { path: 'producto/:id', component: ProductoViewComponent },
   { path: 'login', component: LoginComponent },
   { path: 'admin/listado-productos', component: ListadoProductosComponent },
   { path: 'admin/producto/nuevo', component: CrearProductoComponent },
   { path: 'admin/listado-categorias', component: AltaListadoCategoriaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }