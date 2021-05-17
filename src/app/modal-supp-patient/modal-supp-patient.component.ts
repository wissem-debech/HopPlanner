import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Patient } from '../patient';

@Component({
  selector: 'app-modal-supp-patient',
  templateUrl: './modal-supp-patient.component.html',
  styleUrls: ['./modal-supp-patient.component.css']
})
export class ModalSuppPatientComponent implements OnInit {
  Patient:any;
  constructor(@Inject(MAT_DIALOG_DATA)public data:any) { 
    this.Patient=data
  }

  ngOnInit(): void {
  }

}
export class FormFieldAppearanceExample {}