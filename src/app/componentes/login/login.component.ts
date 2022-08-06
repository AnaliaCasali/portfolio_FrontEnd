import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Validators} from '@angular/forms';
import { FormGroup} from '@angular/forms';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import {Router} from  '@angular/router';
/*para crear formularios reactivos importamos los servicios*/
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  /* inyectamos en el constructor el servicio*/
  constructor(private formBuilder:FormBuilder, private autenticacionService:AutenticacionService, private ruta:Router) { 
      this.form=this.formBuilder.group(
        { email:['',[Validators.required,Validators.email]],
          password:['',[Validators.required,Validators.minLength(8)]],
          deviceInfo: this.formBuilder.group({
            deviceId:["17867868768"],
            deviceType: ["DEVICE_TYPE_ANDROID"],
            notificationToken: ["67667575eececc34"]
          })
        }
      )
    }

  ngOnInit(): void {
  }
 
  get Email(){
    return this.form.get('email');
    }
    
    get Password(){
      return this.form.get('password');
      }
    
      onEnviar(event:Event) {
        event.preventDefault;
        this.autenticacionService.IniciarSesion(this.form.value).subscribe(data=>{
          console.log("DATA" + JSON.stringify(data));
        })
      }
}
