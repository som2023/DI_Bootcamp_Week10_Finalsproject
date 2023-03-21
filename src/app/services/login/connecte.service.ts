import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnecteService {

  constructor(private http: HttpClient) {}
  accessLoginData(data:any ) {
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.http.post('http://localhost:8888/utilisateur/login',data, { headers });
  }
}