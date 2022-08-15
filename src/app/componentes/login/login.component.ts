import { Component, OnInit } from '@angular/core';
import {Router} from  '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { TokenService } from 'src/app/servicios/token.service';
import { AuthService } from 'src/app/servicios/auth.service';

/*para crear formularios reactivos importamos los servicios*/
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged=false;
  isLoggingFail=false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[]=[];
  errMsj!: string;

 
 constructor( private tokenService:TokenService, private authService:AuthService, private router:Router) { 
    }//cierra constructor

  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.isLogged = true;
      this.isLoggingFail=false;
      this.roles=this.tokenService.getAuthorities();
    }}
    onLogin():void {
      console.log("entro a login clic" + this.nombreUsuario + " " + this.password );
      this.loginUsuario=new LoginUsuario(this.nombreUsuario,this.password);
       this.authService.login(this.loginUsuario).subscribe( data =>{
          this.isLogged= true;
          this.isLoggingFail=false;
          this.tokenService.setToken(data.token);
          this.tokenService.setUserName(data.nombreUsuario);
          this.tokenService.setAthorities(data.authorities);
          this.roles = data.authorities;
          this.router.navigate(['']);  
        },err=>{
          this.isLogged=false;
          this.isLoggingFail=true;
          this.errMsj=err.error.mensaje;
          console.log(this.errMsj);
          console.log(" no logueo");
        });
    }

      }
