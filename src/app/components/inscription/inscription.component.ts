import { WebserviceService } from '../../services/webservice.service';
import { Component } from '@angular/core';
import { IUser} from 'src/app/models/user/user';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {

  user: IUser={
    utilisateur_id:0,
    nom:'',
    prenom:'',
    email:'',
    contact:'',
    pseudo:'',
    pwd:'',
  };

  constructor(private api: WebserviceService) {}

  ngOnInit(): void{}
  

  onClick() {
    this.api.saveUser(this.user).subscribe(
  data => {console.log(data)
  alert("Enregistré avec succès") 
  window.location.reload();
 });
}


}
