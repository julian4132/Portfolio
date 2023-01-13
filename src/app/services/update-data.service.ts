import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../common/global-constants/global-constants';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UpdateDataService {
  url:string = Constants.API_ENDPOINT+"/refreshtoken";

  constructor(private http:HttpClient) { }

  refreshToken():Observable<any>{
    var token:string=JSON.parse(sessionStorage.getItem('currentUser') || '{}').refreshToken;
    return this.http.post(this.url, {refreshToken: token}).pipe(map(newToken=>{
      sessionStorage.setItem('currentUser', JSON.stringify({
        token: (newToken as {token:string}).token,
        refreshToken: token
      }))
      console.log("Holaaaa "+(newToken as {token:string}).token);
      return newToken;
    }));
  }


}
