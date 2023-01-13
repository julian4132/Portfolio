import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../common/global-constants/global-constants';

@Injectable({
  providedIn: 'root'
})
export class LogOutService {

  url:string=Constants.API_ENDPOINT+"/userlogout";

  constructor(private http:HttpClient) { }

  logOut():void{
    var refreshToken:string=JSON.parse(sessionStorage.getItem('currentUser') || '{}').refreshToken;
    this.http.post(this.url, {refreshToken: refreshToken}).subscribe();
    sessionStorage.clear();
    window.location.reload();
  }
}
