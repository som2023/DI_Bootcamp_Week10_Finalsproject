import { ITraitement } from 'src/app/models/traitement/traitement';
import { Component, OnInit } from '@angular/core';
import { TraitementService } from 'src/app/services/traitement/traitement.service';

@Component({
  selector: 'app-traitement',
  templateUrl: './traitement.component.html',
  styleUrls: ['./traitement.component.css']
})
export class TraitementComponent implements OnInit {
 
 
  traitement: ITraitement={
    traitement_id:0,
    date_traitement:'',
    dossier_id:'',
    utilisateur_id:0, 
  };

  constructor(private api:TraitementService) {}

  ngOnInit(): void{}

  onClick() {
    this.api.saveTraitement(this.traitement).subscribe(
      {next: (data: any)=>{
        console.log(data);
         alert('Enregistrement reussi avec succes');
         window.location.reload();
      },error(err) {
        console.log(err);
      }
    })
  }
}
