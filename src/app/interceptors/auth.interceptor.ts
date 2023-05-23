import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";
import { tokenStorageService } from "../services/token-storage.service";

const TOKEN_HEADER_KEY = 'x-access-token';

@Injectable ()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private token : tokenStorageService) {}

    intercept (req: HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
       
        let authReq = req;
        const token = this.token.getToken();
        if (token != null) {
            authReq = req.clone({
                headers : req.headers.set(TOKEN_HEADER_KEY, token),
                // withCredentials: true,
            });
        } else {
            console.log('le Barbar  '+token);
        }
        return next.handle(authReq)
        
       
      // req = req.clone({
      //  withCredentials: true,
      // });
      // return next.handle(req)
       
    }
}

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ];