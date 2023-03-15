import { WebserviceService } from './../../services/webservice.service';
import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {

  user: User = new User()

  constructor(private api: WebserviceService) {}

  ngOnInit(): void{


  }

  onClick() {
    this.api.saveUser(this.user).subscribe(
                                            data => {console.log(data)}
                                          )
}

}
