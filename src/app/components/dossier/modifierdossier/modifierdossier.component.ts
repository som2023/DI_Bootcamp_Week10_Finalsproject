import { IDossier } from 'src/app/models/dossier/dossier';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifierdossier',
  templateUrl: './modifierdossier.component.html',
  styleUrls: ['./modifierdossier.component.css']
})
export class ModifierdossierComponent {
  
  // [x: string]: any;
  // dossier:IDossier[]=[];
  dossier!:any;
   
  constructor( private route: ActivatedRoute, private api: HttpClient) { }

 
  
  ngOnInit() {
    this.route.params.subscribe(params => {
     console.log(params);
     console.log(params['id']);
     this.api.get("http://localhost:8888/dossier/one/"+params['id'])
     .subscribe((res:any) => {console.log(res);
      this.dossier = res});
   });
 }

Updatedossier(){
   
  
  this.api.put('http://localhost:8888/dossier/update/'+this.dossier.id, this.dossier[0])
          .subscribe((res)=>{console.log(res);
            alert('Modification reussie avec succès')}
        
            
          );
 
}
}
