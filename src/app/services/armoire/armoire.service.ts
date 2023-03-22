import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArmoireService {

  constructor(private http: HttpClient) { }
  baseUrl = "http://localhost:8888/";

  
  getData() {
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.http.get('http://localhost:8888/', { headers });
  }


  saveAmoire(data:any){
    return this.http.post(this.baseUrl + 'armoire/add' ,data);
  }
  getarmoireData(){
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.http.get('http://localhost:8888/armoire/all', { headers });
  }
  deletearmoireData(id:number){
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.http.delete('http://localhost:8888/armoire/delete/'+id, { headers });
  }

}
