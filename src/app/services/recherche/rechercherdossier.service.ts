import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RechercherdossierService {

  constructor(private http:HttpClient) { }
  getRcechercheData(search: string){
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.http.get('http://localhost:8888/dossier/item/'+ search, { headers });
  }
  gethistoricData(search: string){
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.http.get('http://localhost:8888/dossier/historique/'+ search, { headers });
  }
}
