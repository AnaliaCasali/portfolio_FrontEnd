import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Perfil } from 'src/app/model/perfil';
import { PerfilService } from 'src/app/servicios/perfil.service';

@Component({
  selector: 'app-new-perfil',
  templateUrl: './new-perfil.component.html',
  styleUrls: ['./new-perfil.component.css']
})
export class NewPerfilComponent implements OnInit {
  isNew: boolean=false;
  nombres: string;
  apellido: string;
  fecha_nacimiento : string;
  nacionalidad: string;
  mail: string;
  sobreMi: string;
  ocupacion: string;
  image_background_header: string;    
  image_perfil: string;   
  domicilio: string;
  linkedin: string;    
  github: string;
  telefono: string;
  dni: string;

  perf!: Perfil ;
  
  constructor(private sPerfil: PerfilService,
     private router:Router,private activatedRoute:ActivatedRoute){} 

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params['id'] === undefined) 
       this.isNew = true;
    else
       { const id=this.activatedRoute.snapshot.params['id'];
    
          this.sPerfil.detail(id).subscribe(
          data => {
          this.perf =data;
      }, err => {alert("Fallo en encontrar el Perfil"); this.router.navigate(['']);}
    );
    }
  }
 
  onUpdate():void{
    if (this.isNew===false){
    const id=this.activatedRoute.snapshot.params['id'];
    this.sPerfil.update(id, this.perf).subscribe(
      data => {
        alert("Perfil editado correctamente");
        this.router.navigate(['']);
      }, err => {alert("Error al modificar el Perfil");  this.router.navigate(['']);}
      
    );
    }
 
  }


}
