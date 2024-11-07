import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Marcas } from '../Model/Marcas';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Modelos } from '../Model/Modelos';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  urlListar='http://localhost:9002/MarcasWebServie/listar'
  urlGuardar='http://localhost:9002/MarcasWebServie/guardar'
  urlEditar= 'http://localhost:9002/MarcasWebServie/editar'
  urlBuscar= 'http://localhost:9002/MarcasWebServie/buscar'
  urlEliminar= 'http://localhost:9002/MarcasWebServie/eliminar'


  listarMarca(){
    return this.http.get<Marcas[]>(this.urlListar);
  }
  guardarM(marca:Marcas){
    return this.http.post(this.urlGuardar,marca,{responseType:'text'});
  }
  buscarM(marca:Marcas){
    return this.http.post<Marcas>(this.urlBuscar,marca);
  }
  
  editarM(marca:Marcas){
    return this.http.post(this.urlEditar,marca,{responseType:'text'});
  }
  
  eliminarM(marca:Marcas){
    return this.http.post(this.urlEliminar,marca,{responseType:'text'});
  } 

  urlListarMod= 'http://localhost:9002/ModelosWebServie/listar'
  urlGuardarMod= 'http://localhost:9002/ModelosWebServie/guardar'
  urlEditarMod= 'http://localhost:9002/ModelosWebServie/editar'
  urlBuscarMod= 'http://localhost:9002/ModelosWebServie/buscar'
  urlEliminarMod= 'http://localhost:9002/ModelosWebServie/eliminar'

  
  listarMod(){
    return this.http.get<Modelos[]>(this.urlListarMod);
  }
  
  guardarMod(modelo:Modelos){
    return this.http.post(this.urlGuardarMod,modelo,{responseType:"text"});
  }
  
  buscarModelo(modelo:Modelos){
    return this.http.post<Modelos>(this.urlBuscarMod,modelo);
  }
  
  editarMod(modelo:Modelos){
    return this.http.post(this.urlEditarMod,modelo,{responseType:"text"});
  }
  
  eliminarMod(modelo:Modelos){
    return this.http.post(this.urlEliminarMod,modelo,{responseType:"text"});
  }
  
}
