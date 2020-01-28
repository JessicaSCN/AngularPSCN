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

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { MailingComponent } from './components/mailing/mailing.component';
import { OfertaComponent } from './components/oferta/oferta.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { AltaCategoriaComponent } from './components/admin/alta-categoria/alta-categoria.component';
import { CatPipe } from './Pipes/cat.pipe';



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
    AltaListadoCategoriaComponent,
    CategoriaComponent,
    MailingComponent,
    OfertaComponent,
    ServiciosComponent,
    FiltrosComponent,
    AltaCategoriaComponent,
    CatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule, // dynamically imports firebase/analytics
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [
    ProductosService, CategoriaService, MarcasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
