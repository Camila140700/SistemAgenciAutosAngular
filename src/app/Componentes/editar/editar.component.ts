import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Marcas } from 'src/app/Model/Marcas';
import { ServiceService } from 'src/app/Servicio/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  
  constructor(private router:Router, private servicio:ServiceService){

  }
  marca:Marcas= new Marcas;

  ngOnInit(){
    this.buscar();
  }

  buscar(){
    let id = localStorage.getItem("id");
    this.marca.id=Number(id);

    this.servicio.buscarM(this.marca).subscribe(data=>{
      this.marca=data;
    })
  }

  editar(){
    this.servicio.editarM(this.marca).subscribe(data=>{
      this.router.navigate(["listar"]);
    })
  }
}
