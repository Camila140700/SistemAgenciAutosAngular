import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Marcas } from 'src/app/Model/Marcas';
import { Modelos } from 'src/app/Model/Modelos';
import { ServiceService } from 'src/app/Servicio/service.service';

@Component({
  selector: 'app-guardar-modelos',
  templateUrl: './guardar-modelos.component.html',
  styleUrls: ['./guardar-modelos.component.css']
})
export class GuardarModelosComponent {
constructor(private router:Router, private servicio:ServiceService){}
listaMarcas:Marcas[];
ngOnInit(){
  this.servicio.listarMarca().subscribe(data=>
    this.listaMarcas=data
    
  )
}
modelo:Modelos= new Modelos();
marca:Marcas = new Marcas();
guardar(){
  //Formar Json para guardar
  const registroData:Modelos={
  id: this.modelo.id,
  nombre:this.modelo.nombre,
  tipo:this.modelo.tipo,
  precio:this.modelo.precio,
  fechaLanz:this.modelo.fechaLanz,
          marca: {
              id:this.marca.id ,
              nombre: '',
              origen: '',
              eslogan: ''
          }
  }
  //Imprimir en consola el registro
  console.log(JSON.stringify(registroData))
  this.servicio.guardarMod(registroData).subscribe(data=>{
    this.router.navigate(["listarModelo"]);
  }
  )
}
}
