//import { TodolistpaysService } from '../../../../services/todolistpays.service';
import { TodolistpaysService } from 'src/app/services/todolistpays/todolistpays.service';
import { WebserviceService } from '../../../services/webservice.service';
// import { WebserviceService } from './../../services/webservice.service';
import { IPays } from './../../../pays';
import { Component } from '@angular/core';
import { FunctionsService } from 'src/app/services/API/functions.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent {

  valpays:IPays={
    nom:'',
    localisation:''
  };
 
constructor(private paysAjout:FunctionsService) {}

ajouterPays(){
  this.paysAjout.ajoutPays(this.valpays).subscribe({
 next:data=>{
  console.log(data)
  alert('Enregistré avec succès')
 },
 error:err=>{
  console.log(err); }
});
}
 }


