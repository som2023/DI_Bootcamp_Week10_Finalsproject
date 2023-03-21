import { Router } from '@angular/router';
import { ILogin } from './../../models/loginuser/login';
import { ConnecteService } from './../../services/login/connecte.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user:ILogin={
    pseudo: '',
    pwd: ''
  }
   

  constructor(private api:ConnecteService, private route: Router) {}

  ngOnInit(): void{}

  onValider() {
    this.api.accessLoginData(this.user).subscribe(
      {next: (data:any)=>{
        console.log(data);
       alert('Vous êtes connectés');
       this.route.navigate(['/home'])
      },error(err:'utilisateur ou mot de passe incorrect') {
        alert( err);
      }
    });
 }

}
