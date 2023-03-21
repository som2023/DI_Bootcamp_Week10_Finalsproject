import { TraitementService } from 'src/app/services/traitement/traitement.service';
import { ITraitement } from './../../../models/traitement/traitement';
import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-dossierrechercher',
  templateUrl: './dossierrechercher.component.html',
  styleUrls: ['./dossierrechercher.component.css']
})
export class DossierrechercherComponent{
 
constructor(private traitementlist : TraitementService){}
[x: string]: any;
traitement:ITraitement[]=[];



 getElement(){
  this. traitementlist.getData().subscribe((data)=>{
    this.traitement = data as ITraitement[];
    console.log(this.traitement);
 })
 }
 
 
}