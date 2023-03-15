import { Traitement } from './../../../models/traitement';
import { Component } from '@angular/core';
import { TraitementService } from 'src/app/services/traitement.service';

@Component({
  selector: 'app-traitement',
  templateUrl: './traitement.component.html',
  styleUrls: ['./traitement.component.css']
})
export class TraitementComponent {
 
  message = '';
  traitement: Traitement = new Traitement()

  constructor(private api:TraitementService) {}

  ngOnInit(): void{}

  onClick() {
    this.api.saveTraitement(this.traitement).subscribe(
      {next: (data: any)=>{
        console.log(data);
        this.message= 'Enregistrement reussi avec succes';
      },error(err) {
        console.log(err);
        onmessage = err.message;
      },}
      
    )
}
}
