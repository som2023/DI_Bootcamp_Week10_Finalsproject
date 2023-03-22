import { Component } from '@angular/core';
import { IRecherche } from 'src/app/models/recherche/rechercher';
import { RechercherdossierService } from 'src/app/services/recherche/rechercherdossier.service';

@Component({
  selector: 'app-historiquedossier',
  templateUrl: './historiquedossier.component.html',
  styleUrls: ['./historiquedossier.component.css']
})
export class HistoriquedossierComponent {
  constructor(private traitementlist : RechercherdossierService){}
  [x: string]: any;
recherche:IRecherche[]=[];

search!: any



 getbynam(){
    this. traitementlist.gethistoricData(this.search).subscribe((data)=>{
    this.recherche = data as IRecherche[];
    console.log(this.recherche);
     this.search="";
 })
 }

}
