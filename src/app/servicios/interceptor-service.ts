import { HttpClient, HttpEvent, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from "./token.service";
@Injectable({
    providedIn: 'root'
})
export class InterceptorService {

    constructor(private  tokenService: TokenService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let intReq =req;
        const token=this.tokenService.getToken();
        if(token != null){
            intReq=req.clone({
                headers: req.headers.set('Authorization', 'Bearer' + token)

            });
        } //cierra if  
        return next.handle(intReq);
        }//cierra intercept
} // cierra clase
export const interceptorProvider = [{
     provide: HTTP_INTERCEPTORS,
     useClass: InterceptorService,
     multi: true
     }];
     