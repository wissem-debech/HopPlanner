import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../service/data.service';
import {Medecin} from 'src/app/medecin';
export interface PeriodicElement {
  
  position: number;
  
  name: string;
  
  id:Number;
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
  Medecin = new Medecin();
  
  onChange(_$event: any){}
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dataService:DataService) {
    this.medecin=data

  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit(): void {
    
  }
 
  insertData(){
    this.dataService.insertData(this.Medecin).subscribe(res => {
      this.medecin = res;}
    );

  }
}