
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPays } from 'src/app/pays';
import { FunctionsService } from 'src/app/services/API/functions.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent{
                       
 
  pays!:any;
  constructor( private route: ActivatedRoute,   private api: HttpClient) { }
  

  ngOnInit() {
    this.route.params.subscribe(params => {
     console.log(params);
     console.log(params['id']);
     this.api.get("http://localhost:8888/pays/item/"+params['id'])
     .subscribe((res:any) => {console.log(res);
      this.pays = res});
   });
 }
 

UpdatePays(){
   
  
  this.api.put('http://localhost:8888/pays/update/'+this.pays.id, this.pays[0])
          .subscribe((res)=>{console.log(res);
            alert('Modification reussie avec succès')
            window.location.reload();
            console.log(res);
          }
            
            
          );
 
}
}
