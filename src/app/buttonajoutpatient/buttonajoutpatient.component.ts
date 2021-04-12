import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
  import {Modalajoutpatient2Component} from '../modalajoutpatient2/modalajoutpatient2.component'

@Component({
  selector: 'app-buttonajoutpatient',
  templateUrl: './buttonajoutpatient.component.html',
  styleUrls: ['./buttonajoutpatient.component.css']
})
export class ButtonajoutpatientComponent implements OnInit {


  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(Modalajoutpatient2Component, {
      width:'1000px',
      height:'600px',


  });}
  ngOnInit(): void {
  }

}
