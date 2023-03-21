import { Component } from '@angular/core';
import { IDossier } from 'src/app/models/dossier/dossier';
import { DossierService } from 'src/app/services/dossier/dossier.service';

@Component({
  selector: 'app-dossier',
  templateUrl: './dossier.component.html',
  styleUrls: ['./dossier.component.css']
})
export class DossierComponent {
 
  dossier: IDossier={ 
  code_dossier:'',
  nom:'',
  description:'',
  classeur_id:0,
}

  constructor(private dossierlist :DossierService, private api:DossierService) {}

  ngOnInit(): void{}

  onClick(){
    this.api.saveDossier(this.dossier).subscribe(
      {next: (data: any)=>{
        console.log(data);
        alert('Enregistrement reussi avec succes');
        window.location.reload();
      },error(err) {
        console.log(err);
        onmessage = err.message;
      }
    }
      
    )};
 }

 