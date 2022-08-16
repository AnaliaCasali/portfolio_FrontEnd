import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

const TOKEN_KEY =  'AuthToken';
const USERNAME_KEY = 'AuthUserName';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = "https://portfolioanalia.herokuapp.com/personas/"; 
  constructor(private http: HttpClient) { 

  }
  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL + 'traerperfil');   
  }
}
