import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-editpatient',
  templateUrl: './editpatient.component.html',
  styleUrls: ['./editpatient.component.css']
})
export class EditpatientComponent implements OnInit {
patient : any
  constructor(public  dialogRef : MatDialogRef <EditpatientComponent>,@Inject(MAT_DIALOG_DATA) public data: any , private _snackBar: MatSnackBar) { 
    this.patient=data;
    this.patient.id=data.id
    this.patient.prenom=data.prenom;
    this.patient.maladie=data.maladie;
    this.patient.nom=data.nom;
    
  }

  ngOnInit(): void {
  }
  

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
    this.dialogRef.close();
  }

}

export class FormFieldAppearanceExample {}