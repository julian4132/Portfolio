import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  url = "http://localhost:8080/register";
  //currentUserSubject: BehaviorSubject<any>;
  constructor(private http:HttpClient) { 
    //this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'))
  }

  Signup(credentials: any):Observable<any>
  {
    return this.http.post(this.url, credentials).pipe(map(data=>{
      //sessionStorage.setItem('currentUser', JSON.stringify(data));
      return data;
    }))
  }
}
