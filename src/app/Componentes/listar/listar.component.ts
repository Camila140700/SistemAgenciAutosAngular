import { AppComponent } from './../../app.component';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Marcas } from 'src/app/Model/Marcas';
import { ServiceService } from 'src/app/Servicio/service.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {

  //Logica del componente 
  //Declarar el construcutor en el que vamos a inyectar el Router y el servicio 
  constructor(private router: Router, private servicio: ServiceService){}

  listarMarcas: Marcas[];

  ngOnInit(): void{
this.servicio.listarMarca().subscribe(data=>{
  console.log(data);
  this.listarMarcas=data;
})
}

abrirCompGuardar(){
  this.router.navigate(["guardar"]);

}

//Enviar ID y mostrar el componente editar
abrirCompEditarEnviarid(marca:Marcas){
  //Enviar el id para realizar la busqueda
  localStorage.setItem("id", marca.id.toString());
this.router.navigate(["editar"]);
}

//Enviar ID y mostrar el componente eliminar
abrirCompEliminarEnviarid(marca:Marcas){
  //Enviar el id para realizar la busqueda
localStorage.setItem("id", marca.id.toString());
this.router.navigate(["eliminar"]);
}

}
