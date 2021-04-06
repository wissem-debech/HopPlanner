import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ButtonajoutmedecinComponent} from '../buttonajoutmedecin/buttonajoutmedecin.component'
export interface PeriodicElement {
  
  position: number;
  id:number;
  name: string;
  
  
  specialite: string;
  symbol: string;
  
}
@Component({
  selector: 'app-modalajoutpatient',
  templateUrl: './modalajoutpatient.component.html',
  styleUrls: ['./modalajoutpatient.component.css']
})
export class ModalajoutpatientComponent implements OnInit {
  medecin: any;
  onChange($event){}
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.medecin=data

  }


  ngOnInit(): void {
  }

}
