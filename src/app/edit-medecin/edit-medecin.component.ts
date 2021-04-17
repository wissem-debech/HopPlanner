import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-edit-medecin',
  templateUrl: './edit-medecin.component.html',
  styleUrls: ['./edit-medecin.component.css']
})
export class EditMedecinComponent implements OnInit {

  medecin : any
  constructor(public  dialogRef : MatDialogRef <EditMedecinComponent>,@Inject(MAT_DIALOG_DATA) public data: any , private _snackBar: MatSnackBar) { 
    this.medecin=data;
    this.medecin.id=data.id
    this.medecin.prenom=data.name;
    this.medecin.maladie=data.specialite;
    this.medecin.nom=data.grade;
    
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
