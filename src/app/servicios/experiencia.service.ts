import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

const TOKEN_KEY =  'AuthToken';
const USERNAME_KEY = 'AuthUserName';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  URL = "https://portfolioanalia.herokuapp.com/experiencia/"; 
  constructor(private http: HttpClient) { 
  }
  public lista():Observable<Experiencia[]>{
      return this.http.get<Experiencia[]>(this.URL+ 'lista');
  }
  public detail(id:number):Observable<Experiencia>{
    return this.http.get<Experiencia>(this.URL+ `detail/${id}`);
  }
  public save(experiencia:Experiencia):Observable<any>{
    return this.http.post<any>(this.URL + `create`,experiencia);
  }
  public update(id:number,experiencia:Experiencia):Observable<any>{
    return this.http.put<any>(this.URL + `update/${id}`,experiencia);
  }
  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }
}

 