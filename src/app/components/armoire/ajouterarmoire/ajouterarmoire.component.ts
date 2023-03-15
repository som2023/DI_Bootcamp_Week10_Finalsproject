import { ArmoireService } from './../../../services/armoire.service';
import { Armoire } from './../../../models/armoire';
// import { ArmoireService } from './../../../services/compagnie.service';
 
import { Component } from '@angular/core';

@Component({
  selector: 'app-ajouterarmoire',
  templateUrl: './ajouterarmoire.component.html',
  styleUrls: ['./ajouterarmoire.component.css']
})
export class AjouterarmoireComponent {

  message = '';
  armoire: Armoire = new Armoire()

  constructor(private api:ArmoireService) {}

  ngOnInit(): void{}

  onClick() {
    this.api.saveAmoire(this.armoire).subscribe(
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
