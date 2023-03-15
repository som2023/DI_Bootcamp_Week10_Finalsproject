import { Classeur } from './../../../models/classeur';
import { Component } from '@angular/core';
import { ClasseurService } from 'src/app/services/classeur.service';

@Component({
  selector: 'app-ajouterclasseur',
  templateUrl: './ajouterclasseur.component.html',
  styleUrls: ['./ajouterclasseur.component.css']
})
export class AjouterclasseurComponent {
  message = '';
  classeur: Classeur = new Classeur()

  constructor(private api:ClasseurService) {}

  ngOnInit(): void{}

  onClick() {
    this.api.saveClasseur(this.classeur).subscribe(
      {next: (data)=>{
        console.log(data);
        this.message= 'Enregistrement reussi avec succes';
      },error(err) {
        console.log(err);
        onmessage = err.message;
      },}
      
    )
}
}
