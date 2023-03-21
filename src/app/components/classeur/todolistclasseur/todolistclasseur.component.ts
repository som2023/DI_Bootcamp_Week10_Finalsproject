import { IClasseur } from './../../../models/classeur/classeur';
import { Component } from '@angular/core';
 
import { ClasseurService } from 'src/app/services/classeur/classeur.service';

@Component({
  selector: 'app-todolistclasseur',
  templateUrl: './todolistclasseur.component.html',
  styleUrls: ['./todolistclasseur.component.css']
})
export class TodolistclasseurComponent {
  [x: string]: any;
  classeur:IClasseur[]=[];
  constructor(private classeurlist:ClasseurService){}
  
  
  ngOnInit(): void{

    this.classeurlist.getClasseurData().subscribe((data)=>{
      this.classeur = data as IClasseur[];
       console.log(this.classeur);
    });
}
}
