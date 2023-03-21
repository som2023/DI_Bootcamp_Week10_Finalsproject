import { ICompagnie } from './../../../models/compagnie/compagnie';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifiercompagnie',
  templateUrl: './modifiercompagnie.component.html',
  styleUrls: ['./modifiercompagnie.component.css']
})
export class ModifiercompagnieComponent {
  compagnie!:any;
   
  constructor( private route: ActivatedRoute, private api: HttpClient) { }

 
  
  ngOnInit() {
    this.route.params.subscribe(params => {
     console.log(params);
     console.log(params['id']);
     this.api.get("http://localhost:8888/compagnie/one/"+params['id'])
     .subscribe((res:any) => {console.log(res);
      this.compagnie = res});
   });
 }

UpdateCompagnie(){
   
  this.api.put('http://localhost:8888/compagnie/update/'+this.compagnie.id, this.compagnie[0])
          .subscribe((res)=>{console.log(res);
            alert('Modification reussie avec succès')}
           
            
           
          );
 
}
}
