import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClasseurService {

  constructor(private http: HttpClient) { }
  baseUrl = "http://localhost:8888/";

  
  getData() {
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.http.get('http://localhost:8888/', { headers });
  }


  saveClasseur(data:any){
    return this.http.post(this.baseUrl + 'classeur/add' ,data);
  }
  getClasseurData(){
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.http.get('http://localhost:8888/classeur/all', { headers });
  }
  deleteClasseurData(id:number){
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.http.delete('http://localhost:8888/classeur/delete/'+id, { headers });
  }
}
