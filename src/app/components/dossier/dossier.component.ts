import { Dossier } from './../../models/dossier';
import { Component } from '@angular/core';
import { DossierService } from 'src/app/services/dossier.service';

@Component({
  selector: 'app-dossier',
  templateUrl: './dossier.component.html',
  styleUrls: ['./dossier.component.css']
})
export class DossierComponent {
  message = '';
  dossier: Dossier = new Dossier()

  constructor(private api:DossierService) {}

  ngOnInit(): void{}

  onClick() {
    this.api.saveDossier(this.dossier).subscribe(
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
