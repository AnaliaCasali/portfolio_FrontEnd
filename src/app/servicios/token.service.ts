import { Injectable } from '@angular/core';

const TOKEN_KEY =  'AuthToken';
const USERNAME_KEY = 'AuthUserName';
const AUTHORITIES_KEY = 'AuthAuthorities';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  roles: Array<string> = [];
  constructor() { }
 public setToken(token: string):void{
  windows: sessionStorage.removeItem(TOKEN_KEY);
  windows: sessionStorage.setItem(TOKEN_KEY, token);

 }
 public getToken():string{
  return sessionStorage.getItem(TOKEN_KEY)!;
 }
 
 public setUserName(userName: string):void{
  windows: sessionStorage.removeItem(USERNAME_KEY);
  windows: sessionStorage.setItem(USERNAME_KEY, userName);;

 }
 public getUserName():string{
  return sessionStorage.getItem(USERNAME_KEY)!;
 }
 public setAthorities(autorithies:String[]):void{
  windows: sessionStorage.removeItem(AUTHORITIES_KEY);
  windows: sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify( autorithies));
  
  /*{
  }}*/
 }
 public getAuthorities():string[]{
  this.roles=[];
  if (sessionStorage.getItem(AUTHORITIES_KEY))
  {
    JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)!).forEach((authority:any) =>{
      this.roles.push(authority.autority);
      });
  }
  return this.roles;
}
public logOut():void{
window.sessionStorage.clear();}
}
