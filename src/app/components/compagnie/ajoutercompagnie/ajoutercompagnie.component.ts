import { CompagnieService } from './../../../services/compagnie.service';
import { Compagnie } from './../../../models/compagnie';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ajoutercompagnie',
  templateUrl: './ajoutercompagnie.component.html',
  styleUrls: ['./ajoutercompagnie.component.css']
})
export class AjoutercompagnieComponent {
  message = '';
  compagnie: Compagnie = new Compagnie()

  constructor(private api:CompagnieService) {}

  ngOnInit(): void{}

  onClick() {
    this.api.saveCompagnie(this.compagnie).subscribe(
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
