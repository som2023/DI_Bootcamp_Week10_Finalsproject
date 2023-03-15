import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TraitementService {

  constructor(private http: HttpClient) { }
  baseUrl = "http://localhost:8888/";

  
  getData() {
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.http.get('http://localhost:8888/', { headers });
  }


  saveTraitement(data:any){
    return this.http.post(this.baseUrl + 'traitement/add' ,data);
  }

}
