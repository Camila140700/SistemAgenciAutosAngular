import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SistemaAgenciAutos';

  mostrarTabla: boolean= false;
  constructor(private router: Router){}


abrirCompListar(){
  this.router.navigate(["listar"]);
}

abrirCompGuardar(){
  this.router.navigate(["guardar"]);

}
abrirCompListarMod(){
  this.router.navigate(["listarModelo"]);
}

abrirCompGuardarMod(){
  this.router.navigate(["guardarModelo"]);

}



}