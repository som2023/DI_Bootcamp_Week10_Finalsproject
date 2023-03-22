import { DossierService } from './../../../services/dossier/dossier.service';
import { Component } from '@angular/core';
import { IDossier } from 'src/app/models/dossier/dossier';

@Component({
  selector: 'app-todolistdossier',
  templateUrl: './todolistdossier.component.html',
  styleUrls: ['./todolistdossier.component.css']
})
export class TodolistdossierComponent {
  [x: string]: any;
  dossier:IDossier[]=[];
  constructor(private dossierlist:DossierService){}
  
  
  ngOnInit(): void{

    this.dossierlist.getdossierData().subscribe((data)=>{
      this.dossier = data as IDossier[];
       console.log(this.dossier);
    });
}


deletTodo(id:any){
  this.dossierlist.deletedata(id).subscribe((data)=>{
    this.dossier = data as IDossier[];
     console.log(this.dossier);
     alert('suppression réussie')
     window.location.reload();
  });
}
}
