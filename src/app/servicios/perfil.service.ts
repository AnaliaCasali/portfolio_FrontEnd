import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Perfil } from '../model/perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  URL = "http://localhost:8080/perfil/"; 
  constructor(private http: HttpClient) { 
  }
  public lista():Observable<Perfil[]>{
      return this.http.get<Perfil[]>(this.URL+ 'lista');
  }
  public detail(id:number):Observable<Perfil>{
    return this.http.get<Perfil>(this.URL+ `detail/${id}`);
  }
  public save(perfil:Perfil):Observable<any>{
    return this.http.post<any>(this.URL + `create`,perfil);
  }
  public update(id:number,perfil:Perfil):Observable<any>{
    return this.http.put<any>(this.URL + `update/${id}`,perfil);
  }
  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }
}

 
