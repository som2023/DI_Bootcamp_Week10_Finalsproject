import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifierclasseur',
  templateUrl: './modifierclasseur.component.html',
  styleUrls: ['./modifierclasseur.component.css']
})
export class ModifierclasseurComponent {
  classeur!:any;
   
  constructor( private route: ActivatedRoute, private api: HttpClient) { }

 
  
  ngOnInit() {
    this.route.params.subscribe(params => {
     console.log(params);
     console.log(params['id']);
     this.api.get("http://localhost:8888/classeur/one/"+params['id'])
     .subscribe((res:any) => {console.log(res);
      this.classeur = res});
   });
 }

UpdateClasseur(){
   
  
  this.api.put('http://localhost:8888/classeur/update/'+this.classeur.id, this.classeur[0])
          .subscribe((res)=>{console.log(res);
            alert('Modification reussie avec succès')}
           
            
           
          );
 
}

}
