import { Injectable } from '@angular/core';
import { Constants } from '../common/global-constants/global-constants';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FetchLinksDataService {
  url:string=Constants.API_ENDPOINT+"/fetchlinks"

  constructor(private http:HttpClient) { }

  fetchLinks(name:string){
    return this.http.post(this.url, {name: name});
  }
}
