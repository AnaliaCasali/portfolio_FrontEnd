import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Perfil } from 'src/app/model/perfil';
import { PerfilService } from 'src/app/servicios/perfil.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  perfil: Perfil[]=[];
  
  constructor(private  datosPerfil:PerfilService, private tokenService:TokenService ) {}
  isLogged=false;
   
  ngOnInit(): void {
    this.cargarPerfil();
    if (this.tokenService.getToken())
      {this.isLogged=true;}
    else
      {this.isLogged=false;}
     }

  cargarPerfil():void{
    this.datosPerfil.lista().subscribe(data =>{this.perfil=data;});
  }
  delete(id?: number){
    if(id != undefined){
      this.datosPerfil.delete(id).subscribe(
        data => {
          this.cargarPerfil();
        }, err => {
          alert("No se pudo borrar el Perfil");
        }
      )
    }
  }

}
