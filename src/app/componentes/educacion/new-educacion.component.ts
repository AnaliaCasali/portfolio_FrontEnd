import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  isNew: boolean=false;
  escuela : string="";
  carrera: string ="";
  imagen: string ="";
  titulo : string="";
  puntaje: string="";
  inicio: string="";
  fin: string="";
  educ!: Educacion ;
  
  constructor(private sEducacion: EducacionService,
     private router:Router,private activatedRoute:ActivatedRoute){} 

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params['id'] === undefined) 
       this.isNew = true;
    else
       { const id=this.activatedRoute.snapshot.params['id'];
    
          this.sEducacion.detail(id).subscribe(
          data => {
          this.educ =data;
      }, err => {alert("Fallo en encontrar "); this.router.navigate(['']);}
    );
    }
  }
  onCreate():void{

    const educacion=new Educacion(this.escuela,this.titulo,this.imagen, this.carrera,this.puntaje,this.inicio,this.fin);
    this.sEducacion.save(educacion).subscribe(
      data=>{alert("Educacion añadida");
      this.router.navigate(['']);
  },err=> {alert("Fallo");
  this.router.navigate(['']);}
  );
  }

  onUpdate():void{
    if (this.isNew===false){
    const id=this.activatedRoute.snapshot.params['id'];
    this.sEducacion.update(id, this.educ).subscribe(
      data => {
        alert("Educacion editada correctamente");
        this.router.navigate(['']);
      }, err => {alert("Error al modificar la educacion");  this.router.navigate(['']);}
      
    );
    }
 
  }


}
