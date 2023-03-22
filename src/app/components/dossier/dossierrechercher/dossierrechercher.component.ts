import { RechercherdossierService } from './../../../services/recherche/rechercherdossier.service';
import { IRecherche} from './../../../models/recherche/rechercher';
import { Component} from '@angular/core';
 

@Component({
  selector: 'app-dossierrechercher',
  templateUrl: './dossierrechercher.component.html',
  styleUrls: ['./dossierrechercher.component.css']
})
export class DossierrechercherComponent{
 
constructor(private traitementlist : RechercherdossierService){}
[x: string]: any;
recherche:IRecherche[]=[];

search!: any



 getbynam(){
    this. traitementlist.getRcechercheData(this.search).subscribe((data)=>{
    this.recherche = data as IRecherche[];
    console.log(this.recherche);
     this.search="";
 })
 }
 


 
}