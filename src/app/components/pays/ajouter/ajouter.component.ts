import { WebserviceService } from './../../../services/webservice.service';
// import { WebserviceService } from './../../services/webservice.service';
import { Pays } from './../../../pays';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent {

  pays: Pays = new Pays()

  constructor(private api: WebserviceService) {}

  ngOnInit(): void{


  }

  onClick() {
    this.api.savePays(this.pays).subscribe(
                                            data => {console.log(data)}
                                          )
}


}
