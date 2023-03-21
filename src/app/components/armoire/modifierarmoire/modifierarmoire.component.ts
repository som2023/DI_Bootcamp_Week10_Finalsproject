import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { window } from 'rxjs';

@Component({
  selector: 'app-modifierarmoire',
  templateUrl: './modifierarmoire.component.html',
  styleUrls: ['./modifierarmoire.component.css']
})
export class ModifierarmoireComponent {
 armoire!:any;
   
  constructor( private route: ActivatedRoute, private api: HttpClient) { }

 
  
  ngOnInit() {
    this.route.params.subscribe(params => {
     console.log(params);
     console.log(params['id']);
     this.api.get("http://localhost:8888/armoire/one/"+params['id'])
     .subscribe((res:any) => {console.log(res);
      this.armoire = res});
   });
 }

UpdateArmoire(){
   
  
  this.api.put('http://localhost:8888/armoire/update/'+this.armoire.id, this.armoire[0])
          .subscribe((res)=>{console.log(res);
            alert('Modification reussie avec succès')}
           );
 
}

}