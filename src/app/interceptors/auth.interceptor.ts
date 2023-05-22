import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

const TOKEN_HEADER_KEY = 'x-access-totken';

@Injectable ()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private auth : AuthService) {}

    intercept (req: HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
        let authReq = req;
        const token = this.auth.getToken();
        if (token != null) {
            authReq = req.clone({headers : req.headers.set(TOKEN_HEADER_KEY, token)});
        }
        return next.handle(authReq)
    }
}