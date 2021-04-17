import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ModalajoutpatientComponent} from '../modalajoutpatient/modalajoutpatient.component'

@Component({
  selector: 'app-buttonajoutmedecin',
  templateUrl: './buttonajoutmedecin.component.html',
  styleUrls: ['./buttonajoutmedecin.component.css']
})
export class ButtonajoutmedecinComponent implements OnInit {

  constructor(public dialog: MatDialog) {}



  ngOnInit(): void {
  }

}
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}