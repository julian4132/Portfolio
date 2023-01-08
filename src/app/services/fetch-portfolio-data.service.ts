import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchPortfolioDataService {
  url:string="http://localhost:8080/data"
  constructor(private http:HttpClient) {}

  fetchData():Observable<any>{
    return this.http.post(this.url, "");
  }
}
