import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Constants } from '../common/global-constants/global-constants';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdatePortfolioDataService {
  url:string = Constants.API_ENDPOINT+"/updatedata";

  constructor(private http:HttpClient) { }

  Update(data:any){
    console.log("enviando");
    const req=this.http.post(this.url, data);
    req.subscribe();
  }
}
