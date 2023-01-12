import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Constants } from '../common/global-constants/global-constants';

@Injectable({
  providedIn: 'root'
})
export class UpdatePortfolioDataService {
  url:string = Constants.API_ENDPOINT+"/updatedata";

  constructor(private http:HttpClient) { }

  Update(data:any){
    this.http.post(this.url, data);
    console.log(data);
  }
}
