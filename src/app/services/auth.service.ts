import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Constants } from '../common/global-constants/global-constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = Constants.API_ENDPOINT+"/authenticate";
  currentUserSubject: BehaviorSubject<any>;
  constructor(private http:HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'))
  }

  Login(credentials: any):Observable<any>
  {
    return this.http.post(this.url, credentials).pipe(map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    }))
  }

  get CurrentUser(){
    return this.currentUserSubject.value;
  }
}
