import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './components/form/form.component';

// Rutas
import { AppRoutingModule } from './app-routing.module';


import { ProductosService } from './services/productos.services';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
// Public
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoViewComponent } from './components/producto-view/producto-view.component';
// Login
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
// Admin
import { ListadoProductosComponent } from './components/admin/listado-productos/listado-productos.component';
import { CrearProductoComponent } from './components/admin/crear-producto/crear-producto.component';
import { CategoriaService } from './services/categoria.services';
import { MarcasService } from './services/marcas.services';
import { AltaListadoCategoriaComponent } from './components/admin/alta-listado-categoria/alta-listado-categoria.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NosotrosComponent,
    ProductosComponent,
    ProductoViewComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    FormComponent,
    ListadoProductosComponent,
    CrearProductoComponent,
    AltaListadoCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProductosService, CategoriaService, MarcasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
