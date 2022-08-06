import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url: "http://npinti.ddns.net:9008/api/auth/login" = "http://npinti.ddns.net:9008/api/auth/login";
  currentUserSubject: BehaviorSubject<any>;
  constructor( private http:HttpClient) {
    console.log("El servicio de autenticacion esta corriendo")
    this.currentUserSubject=new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')|| '{}'));
   }

   IniciarSesion(credenciales:any):Observable<any>{
    return this.http.post(this.url, credenciales).pipe(map(data=>{
      sessionStorage.setItem('currentUser',JSON.stringify(data));
      return data;
    }))
   }
}
