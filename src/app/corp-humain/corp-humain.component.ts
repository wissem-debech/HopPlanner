import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SymptomeTeteComponent} from '../symptome-tete/symptome-tete.component'

interface Car {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-corp-humain',
  templateUrl: './corp-humain.component.html',
  styleUrls: ['./corp-humain.component.css']
})
export class CorpHumainComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(SymptomeTeteComponent);
  }




  ngOnInit(): void {
  }
  cars: Car[] = [
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'saab', viewValue: 'Saab'},
    {value: 'mercedes', viewValue: 'Mercedes'}
  ];
}
