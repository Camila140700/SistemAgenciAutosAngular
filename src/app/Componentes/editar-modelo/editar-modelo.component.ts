import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Marcas } from 'src/app/Model/Marcas';
import { Modelos } from 'src/app/Model/Modelos';
import { ServiceService } from 'src/app/Servicio/service.service';

@Component({
  selector: 'app-editar-modelo',
  templateUrl: './editar-modelo.component.html',
  styleUrls: ['./editar-modelo.component.css']
})
export class EditarModeloComponent {

  constructor(private router:Router, private servicio:ServiceService){}
  listaMarcas:Marcas[];

   //Variable de tipo objeto
modelo:Modelos=new Modelos();


ngOnInit(){

  this.servicio.listarMarca().subscribe(data=>{
   this.listaMarcas=data;
  })

  this.buscar();
}


  
  buscar(){
    let id = localStorage.getItem("id");
    this.modelo.id=Number(id);

    this.servicio.buscarModelo(this.modelo).subscribe(data=>{
      console.log(data);
      this.modelo=data;
    })
  }

 

  editar(){
    this.servicio.editarMod(this.modelo).subscribe(data=>{
      this.router.navigate(["listarModelo"]);
    })
  }
}
