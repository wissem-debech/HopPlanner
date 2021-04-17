import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-delete-medecin',
  templateUrl: './delete-medecin.component.html',
  styleUrls: ['./delete-medecin.component.css']
})
export class DeleteMedecinComponent implements OnInit {

  medecin:any
  constructor(@Inject(MAT_DIALOG_DATA)public data:any) { 
    this.medecin=data
  }

 

  ngOnInit(): void {
  }

}
