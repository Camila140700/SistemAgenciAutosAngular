import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Marcas } from 'src/app/Model/Marcas';
import { ServiceService } from 'src/app/Servicio/service.service';

@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.css']
})
export class GuardarComponent {
  constructor(private router:Router, private servicio:ServiceService){}
  //Declaramos el objeto 
  marca: Marcas = new Marcas();

  //guardar metodo
  guardar(){
    this.servicio.guardarM(this.marca).subscribe(data=>{
      this.router.navigate(["listar"]);
    })
  }

}
