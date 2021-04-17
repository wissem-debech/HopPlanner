import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-supp-patient',
  templateUrl: './modal-supp-patient.component.html',
  styleUrls: ['./modal-supp-patient.component.css']
})
export class ModalSuppPatientComponent implements OnInit {
   patient:any
  constructor(@Inject(MAT_DIALOG_DATA)public data:any) { 
    this.patient=data
  }

  ngOnInit(): void {
  }

}
export class FormFieldAppearanceExample {}