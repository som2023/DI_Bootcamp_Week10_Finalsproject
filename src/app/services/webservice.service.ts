import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {
  constructor(private http: HttpClient) { }
  baseUrl = "http://localhost:8888/";

  
  getData() {
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.http.get('http://localhost:8888/', { headers });
  }


  saveUser(data:any){
    return this.http.post(this.baseUrl + 'utilisateur/add' ,data);
  }
  getPaysData() {
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.http.get('http://localhost:8888/', { headers });
  }


  savePays(data:any){
    return this.http.post(this.baseUrl + 'pays/add' ,data);
  }
  deletePaysdata(id:any){
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.http.delete('http://localhost:8888/pays/delete/'+id, { headers });
  }
}
