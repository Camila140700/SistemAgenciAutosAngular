import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListarComponent } from './Componentes/listar/listar.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { GuardarComponent } from './Componentes/guardar/guardar.component';
import { EditarComponent } from './Componentes/editar/editar.component';
import { EliminarComponent } from './Componentes/eliminar/eliminar.component';
import { ListarModelosComponent } from './Componentes/listar-modelos/listar-modelos.component';
import { GuardarModelosComponent } from './Componentes/guardar-modelos/guardar-modelos.component';
import { EditarModeloComponent } from './Componentes/editar-modelo/editar-modelo.component';
@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    GuardarComponent,
    EditarComponent,
    EliminarComponent,
    ListarModelosComponent,
    GuardarModelosComponent,
    EditarModeloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
