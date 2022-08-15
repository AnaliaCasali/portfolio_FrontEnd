import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

proyectos: Proyecto[]=[];
constructor(private  datosProyectos:ProyectoService, private tokenService:TokenService ) {}
isLogged=false;
 
ngOnInit(): void {
  this.cargarProyecto();
  if (this.tokenService.getToken())
    {this.isLogged=true;}
  else
    {this.isLogged=false;}
   }

cargarProyecto():void{
  this.datosProyectos.lista().subscribe(data =>{this.proyectos=data;});
}
delete(id?: number){
  if(id != undefined){
    this.datosProyectos.delete(id).subscribe(
      data => {
        this.cargarProyecto();
      }, err => {
        alert("No se pudo borrar el proyecto");
      }
    )
  }
}
}