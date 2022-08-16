import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

const TOKEN_KEY =  'AuthToken';
const USERNAME_KEY = 'AuthUserName';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL = "https://portfolioanalia.herokuapp.com/educacion/"; 
  constructor(private http: HttpClient) { 
  }
  public lista():Observable<Educacion[]>{
      return this.http.get<Educacion[]>(this.URL+ 'lista');
  }
  public detail(id:number):Observable<Educacion>{
    return this.http.get<Educacion>(this.URL+ `detail/${id}`);
  }
  public save(educacion:Educacion):Observable<any>{
    return this.http.post<any>(this.URL + `create`,educacion);
  }
  public update(id:number,educacion:Educacion):Observable<any>{
    return this.http.put<any>(this.URL + `update/${id}`,educacion);
  }
  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }}
