import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  isNew: boolean=false;
  nombre : string="";
  descripcion : string="";
  inicio: string="";
  fin: string="";
  proy!: Proyecto ;
  
  constructor(private sProyecto: ProyectoService,
     private router:Router,private activatedRoute:ActivatedRoute){} 

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params['id'] === undefined) 
       this.isNew = true;
    else
       { const id=this.activatedRoute.snapshot.params['id'];
    
          this.sProyecto.detail(id).subscribe(
          data => {
          this.proy =data;
      }, err => {alert("Fallo en encontrar el proyecto"); this.router.navigate(['']);}
    );
    }
  }
  onCreate():void{
    const proyecto=new Proyecto(this.nombre, this.descripcion,this.inicio,this.fin);
    this.sProyecto.save(proyecto).subscribe(
      data=>{alert("Proyecto añadido");
      this.router.navigate(['']);
  },err=> {alert("Fallo");
  this.router.navigate(['']);}
  );
  }

  onUpdate():void{
    if (this.isNew===false){
    const id=this.activatedRoute.snapshot.params['id'];
    this.sProyecto.update(id, this.proy).subscribe(
      data => {
        alert("Proyecto editado correctamente");
        this.router.navigate(['']);
      }, err => {alert("Error al modificar el proyecto");  this.router.navigate(['']);}
      
    );
    }
 
  }


}
