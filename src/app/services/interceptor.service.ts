import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';
import { catchError, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators'
import { UpdateDataService } from './update-data.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private authService:AuthService, private refreshService:UpdateDataService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //var currentUser = this.authService.CurrentUser;
    var currentUser = JSON.parse(sessionStorage.getItem('currentUser') || '{}');
    
    if(currentUser && currentUser.token){
      console.log("Funciono, " + currentUser.token);
      req = req.clone({
        setHeaders:{
          Authorization: `Bearer ${currentUser.token}`
        }
      });
    }
    console.log("Soy Interceptor, "+JSON.stringify(currentUser));
    return next.handle(req).pipe(catchError( err => {
      if(err instanceof HttpErrorResponse && err.status===401){
        return this.refreshService.refreshToken().pipe(switchMap(tokens => {
          currentUser = JSON.parse(sessionStorage.getItem('currentUser') || '{}');
          console.log("Intenté con "+currentUser.token);
          req = req.clone({
            setHeaders:{
              Authorization: `Bearer ${currentUser.token}`
            }
          });
          return next.handle(req);
        }));
      }
      throw new Error("Not working");
    }))
  }
}
