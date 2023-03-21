import { url_path } from './../../apicontants/liens';
import { IPays } from './../../pays';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from 'src/environment/envionment.dev';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {
  http: any;

  constructor(private apiservice: ApiService) { }


  ajoutPays(pays: IPays) {

    return this.apiservice.post({ endpoint: url_path.ADD_PAYS, data: JSON.stringify(pays) });
    //window.location.reload();
  }
  // updatePays(pays: IPays) {
  //   // return this.apiservice.put({ endpoint: url_path.EDIT_PAYS, data: JSON.stringify(pays) });
  // }
  getOne(id: any) {
    //pays/item/
    return this.apiservice.getOne({ endpoint: 'pays/item/', data: id });

  }
  delete(pays_id: number) {
    return this.apiservice.delete(`pays/delete/${pays_id}`);
  }




}



