import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

 // experienciaList:any;
  experiencias: Experiencia[]=[];
  constructor(private  datosExperiencia:ExperienciaService, private tokenService:TokenService ) {}
  isLogged=false;
   
  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken())
      {this.isLogged=true;}
    else
      {this.isLogged=false;}
     }

  cargarExperiencia():void{
    this.datosExperiencia.lista().subscribe(data =>{this.experiencias=data;});
  }
  delete(id?: number){
    if(id != undefined){
      this.datosExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
}