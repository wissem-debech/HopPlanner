import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent  {

  medecin : any
  constructor(public dialogRef:MatDialogRef <ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any){
      this.medecin=data
    }

}
export interface Dessert {


  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}