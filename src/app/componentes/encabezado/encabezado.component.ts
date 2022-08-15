import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';
import { PerfilService } from 'src/app/servicios/perfil.service';
import { Perfil } from 'src/app/model/perfil';
@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  perfil: Perfil[]=[];
  isLogged=false;

  constructor(private  datosPerfil: PerfilService, private tokenService: TokenService, private router:Router ) {}

  
   
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


login():void{
  this.router.navigate(['/login'])
}
onLogout():void{
  this.tokenService.logOut();
  window.location.reload();
}
}
