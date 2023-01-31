import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timeout } from 'rxjs';
import { Constants } from '../common/global-constants/global-constants';

@Injectable({
  providedIn: 'root'
})
export class PublicDataService {
  url:string=Constants.API_ENDPOINT+"/publicdata"
  constructor(private http:HttpClient) {}

  fetchData():Observable<any>{
    return this.http.post(this.url, "").pipe(
      timeout(2500)
    );
  }
}
