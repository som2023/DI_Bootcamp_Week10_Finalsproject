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
  constructor(private compagnielist:CompagnieService){}
  
  
  ngOnInit(): void{

    this.compagnielist.getcompagnieData().subscribe((data)=>{
      this.compagnie = data as ICompagnie[];
       console.log(this.compagnie);
    });
}
}
