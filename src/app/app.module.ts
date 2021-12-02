import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { ContactenosComponent } from './paginas/contactenos/contactenos.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { PieComponent } from './componentes/pie/pie.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ContactenosComponent,
    EncabezadoComponent,
    FormularioComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
