import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/envionment.dev';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}

  get(endpoint:string){
    this.http.get(`${environment.BASE_URL}${endpoint}`, {headers: this.httpHeader()});
  }

  
  getOne(parameter : Required<{endpoint : string , data : any}> ){
    this.http.get(`${environment.BASE_URL}${parameter.endpoint}${parameter.data}`, {headers: this.httpHeader()});
  }
  post(parameter : Required<{endpoint : string , data : any}> ) {
    // console.log(parameter.endpoint);
    // console.log(parameter.data);
    return this.http.post(`${environment.BASE_URL}${parameter.endpoint}`,parameter.data, {headers : this.httpHeader()} );
  }

  put(parameter : Required<{endpoint : string , id:number, data : any}>) {
    return this.http.put(`${environment.BASE_URL}${parameter.endpoint}${parameter.id}`, parameter.data,{headers : this.httpHeader()});
  }

  delete(endpoint : string) {
    return this.http.delete(`${environment.BASE_URL}${endpoint}`,{headers : this.httpHeader()});
  }

  httpHeader() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT,DELETE',
      'Accept': 'application/json',
  });
}
}