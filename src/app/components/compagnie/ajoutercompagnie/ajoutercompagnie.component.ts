import { CompagnieService } from '../../../services/compagnie/compagnie.service';
import {  ICompagnie } from '../../../models/compagnie/compagnie';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ajoutercompagnie',
  templateUrl: './ajoutercompagnie.component.html',
  styleUrls: ['./ajoutercompagnie.component.css']
})
export class AjoutercompagnieComponent {
  
  compagnie: ICompagnie={
    compagnie_id:0,
    nom:'',
    adresse:'',
    pays_id:0
  }

  constructor(private api:CompagnieService) {}

  ngOnInit(): void{}

  onClick() {
    this.api.saveCompagnie(this.compagnie).subscribe(
      {next: (data)=>{
        console.log(data);
        alert("Enregistrement rèussi avec succès");
        window.location.reload();
      },error(err) {
        console.log(err);
        alert("Echec d'enregistrement");
        onmessage = err.message;
      }
    });
  }

}
