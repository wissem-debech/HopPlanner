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
    this.patient.weight=data.weight;
  }

  ngOnInit(): void {
  }

}
export class FormFieldAppearanceExample {}