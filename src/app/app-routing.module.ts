import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './Componentes/listar/listar.component';
import { GuardarComponent } from './Componentes/guardar/guardar.component';
import { EditarComponent } from './Componentes/editar/editar.component';
import { EliminarComponent } from './Componentes/eliminar/eliminar.component';
import { ListarModelosComponent } from './Componentes/listar-modelos/listar-modelos.component';
import { GuardarModelosComponent } from './Componentes/guardar-modelos/guardar-modelos.component';
import { EditarModeloComponent } from './Componentes/editar-modelo/editar-modelo.component';



//Es un arreglo de rutas que necesito para consumir una web service,
//Y para agregar los componentes
const routes: Routes = [
  {path: "listar", component:ListarComponent},
  {path: "guardar", component:GuardarComponent},
  {path: "editar", component:EditarComponent},
  {path: "eliminar", component:EliminarComponent},
  {path: "listarModelo", component:ListarModelosComponent},
  {path: "guardarModelo", component:GuardarModelosComponent},
  {path: "editarModelo", component:EditarModeloComponent}
 
];

//Es una clase que configura el inyector y compilador de un componente
//para que otros componentes externos puedan
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
