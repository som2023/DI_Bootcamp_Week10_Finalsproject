//import { ArmoireService } from './../../../services/armoire.service';
import { ArmoireService } from 'src/app/services/armoire/armoire.service';
import { IArmoire } from 'src/app/models/armoire/armoire';
// import { ArmoireService } from './../../../services/compagnie.service';
 
import { Component } from '@angular/core';

@Component({
  selector: 'app-ajouterarmoire',
  templateUrl: './ajouterarmoire.component.html',
  styleUrls: ['./ajouterarmoire.component.css']
})
export class AjouterarmoireComponent {

  
  armoire: IArmoire={
    armoire_id:0,
    code_armoire:'',
    description: '',
    compagnie_id:0
  };

  constructor(private api:ArmoireService) {}

  ngOnInit(): void{}

  onClick() {
    this.api.saveAmoire(this.armoire).subscribe(
      {next: (data: any)=>{
        console.log(data);
       alert('Enregistrement reussi avec succes');
       window.location.reload();
      },error(err) {
        alert("Echec d'enregistrement");
        onmessage = err.message;
      },}
      
    )
}
}
