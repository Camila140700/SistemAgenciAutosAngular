import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Marcas } from 'src/app/Model/Marcas';
import { Modelos } from 'src/app/Model/Modelos';
import { ServiceService } from 'src/app/Servicio/service.service';

@Component({
  selector: 'app-listar-modelos',
  templateUrl: './listar-modelos.component.html',
  styleUrls: ['./listar-modelos.component.css']
})
export class ListarModelosComponent {
  constructor(private router:Router, private servicio:ServiceService){}

  listarModelos:Modelos[];

  ngOnInit(){
    this.servicio.listarMod().subscribe(data=>{
      this.listarModelos=data;
    })
  }
  abrirCompGuardarMod(){
    this.router.navigate(["guardarModelo"]);
  
  }  

  //enviar id y mostrar componente para editar
abrirCompEditar(modelo:Modelos){
  localStorage.setItem("id",modelo.id.toString());
  this.router.navigate(["editarModelo"]);
}

eliminar(modelo:Modelos){
  var r = confirm("¿Esta seguro de eliminar este registro?")
  if(r==true){
    this.servicio.eliminarMod(modelo).subscribe(data=>{
      this.ngOnInit();
    })
  }
}

}


