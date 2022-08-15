import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  isNew: boolean=false;
  nombre : string="";
  puesto: string ="";
  imagen: string ="";
  descripcion : string="";
  inicio: string="";
  fin: string="";
  expLab!: Experiencia ;
  
  constructor(private sExperiencia: ExperienciaService,
     private router:Router,private activatedRoute:ActivatedRoute){} 

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params['id'] === undefined) 
       this.isNew = true;
    else
       { const id=this.activatedRoute.snapshot.params['id'];
    
          this.sExperiencia.detail(id).subscribe(
          data => {
          this.expLab =data;
      }, err => {alert("Fallo en encontrar la experiencia"); this.router.navigate(['']);}
    );
    }
  }
  onCreate():void{
    const experiencia=new Experiencia(this.nombre,this.puesto,this.imagen, this.descripcion,this.inicio,this.fin);
    this.sExperiencia.save(experiencia).subscribe(
      data=>{alert("Experiencia añadida");
      this.router.navigate(['']);
  },err=> {alert("Fallo");
  this.router.navigate(['']);}
  );
  }

  onUpdate():void{
    if (this.isNew===false){
    const id=this.activatedRoute.snapshot.params['id'];
    this.sExperiencia.update(id, this.expLab).subscribe(
      data => {
        alert("Experiencia editada correctamente");
        this.router.navigate(['']);
      }, err => {alert("Error al modificar la experiencia");  this.router.navigate(['']);}
      
    );
    }
 
  }


}
