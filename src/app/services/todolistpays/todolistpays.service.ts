
//import { IPays } from './../pays';
import { IPays } from 'src/app/pays';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodolistpaysService {
  delete(pays_id: number) {
    throw new Error('Method not implemented.');
  }
 
  

  constructor(private http: HttpClient) { }
  baseUrl = "http://localhost:8888/pays/all";
 
  getData() {
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.http.get(this.baseUrl, { headers });
  }
  

 

  // saveCompagnie(data:any){
  //   return this.http.post(this.baseUrl + 'compagnie/add' ,data);
  // }
}
