import { IArmoire } from './../../../models/armoire/armoire';
import { Component } from '@angular/core';
import { ArmoireService } from 'src/app/services/armoire/armoire.service';

@Component({
  selector: 'app-todolistarmoire',
  templateUrl: './todolistarmoire.component.html',
  styleUrls: ['./todolistarmoire.component.css']
})
export class TodolistarmoireComponent {
  [x: string]: any;
  armoire:IArmoire[]=[];
  constructor(private armoirelist:ArmoireService){}
  
  
  ngOnInit(): void{

    this.armoirelist.getarmoireData().subscribe((data)=>{
      this.armoire = data as IArmoire[];
       console.log(this.armoire);
    });
}
}
