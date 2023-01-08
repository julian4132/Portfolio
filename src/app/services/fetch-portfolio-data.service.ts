import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../common/global-constants/global-constants.component';

@Injectable({
  providedIn: 'root'
})
export class FetchPortfolioDataService {
  url:string=Constants.API_ENDPOINT+"/data"
  constructor(private http:HttpClient) {}

  fetchData():Observable<any>{
    return this.http.post(this.url, "");
  }
}
