import { ICompagnie } from './../../../models/compagnie/compagnie';
import { Component } from '@angular/core';
import { CompagnieService } from 'src/app/services/compagnie/compagnie.service';

@Component({
  selector: 'app-todolistcompagnie',
  templateUrl: './todolistcompagnie.component.html',
  styleUrls: ['./todolistcompagnie.component.css']
})
export class TodolistcompagnieComponent {
  [x: string]: any;
  compagnie:ICompagnie[]=[];
  constructor(private compagnielist:CompagnieService, private api: CompagnieService){}
  
  
  ngOnInit(): void{

    this.compagnielist.getcompagnieData().subscribe((data)=>{
      this.compagnie = data as ICompagnie[];
       console.log(this.compagnie);
    });
}
deletecompagnie(id:number){
  this.api.deletecompagniedata(id).subscribe((data:any)=>{
      this.compagnie = data as ICompagnie[];
      console.log(this.compagnie);
      alert("suppression réussie avec succès");
      window.location.reload()
      
 });
 }
}
