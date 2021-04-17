import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface PeriodicElement {
  
  position: number;
  id:number;
  name: string;
  
  
  specialite: string;
  symbol: string;
  
}
@Component({
  selector: 'app-ajoutmed',
  templateUrl: './ajoutmed.component.html',
  styleUrls: ['./ajoutmed.component.css']
})
export class AjoutmedComponent implements OnInit {

  medecin: any;
  onChange(_$event: any){}
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.medecin=data

  }

  ngOnInit(): void {
  }

}
