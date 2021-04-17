import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editpatient',
  templateUrl: './editpatient.component.html',
  styleUrls: ['./editpatient.component.css']
})
export class EditpatientComponent implements OnInit {
patient : any
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { 
    this.patient=data;
    this.patient.id=data.id
    this.patient.prenom=data.prenom;
    this.patient.maladie=data.maladie;
    this.patient.nom=data.nom;
  }

  ngOnInit(): void {
  }

}
export class FormFieldAppearanceExample {}