import { IPays } from './../../pays';
import { TodolistpaysService } from 'src/app/services/todolistpays/todolistpays.service';
import { Component } from '@angular/core';
import { FunctionsService } from 'src/app/services/API/functions.service';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  [x: string]: any;
  pays:IPays[]=[];

  constructor(private payslist:TodolistpaysService, private api:FunctionsService){

  }


  ngOnInit(): void {
    this.payslist.getData().subscribe((data)=>{
       this.pays = data as IPays[];
       console.log(this.pays);
    })
  }
   delete(pays_id:number){
    this.api.delete(pays_id).subscribe((data:any)=>{
      alert("Supprimer ok");
   })
   }
}
