import { IClasseur } from './../../../models/classeur/classeur';
import { Component } from '@angular/core';
import { ClasseurService } from 'src/app/services/classeur/classeur.service';

@Component({
  selector: 'app-ajouterclasseur',
  templateUrl: './ajouterclasseur.component.html',
  styleUrls: ['./ajouterclasseur.component.css']
})
export class AjouterclasseurComponent {
   
  classeur: IClasseur={
    classeur_id:0,
    code_classeur:'',
    armoire_id:0,
  } 

  constructor(private api:ClasseurService) {}

  ngOnInit(): void{}

  onClick() {
    this.api.saveClasseur(this.classeur).subscribe(
      {next: (data)=>{
        console.log(data);
        alert('Enregistrement reussi avec succes');
        window.location.reload();
      },error(err) {
        alert("Echec d'Enregistrement");
        onmessage = err.message;
      },}
      
    )
}
}
