import { IPays } from './../../pays';
import { TodolistpaysService } from 'src/app/services/todolistpays/todolistpays.service';
import { Component } from '@angular/core';
import { FunctionsService } from 'src/app/services/API/functions.service';
import { WebserviceService } from 'src/app/services/webservice.service';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  [x: string]: any;
  pays:IPays[]=[];

  constructor(private payslist:TodolistpaysService, private api:WebserviceService){

  }


  ngOnInit(): void {
    this.payslist.getData().subscribe((data)=>{
       this.pays = data as IPays[];
       console.log(this.pays);
    })
  }
   deletepays(pays_id:number){
    this.api.deletePaysdata(pays_id).subscribe((data:any)=>{
        this.pays = data as IPays[];
        console.log(this.pays);
        alert("suppression réeussie avec succès");
        
   });
   }
}
