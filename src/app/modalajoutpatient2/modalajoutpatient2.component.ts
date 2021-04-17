import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ButtonajoutpatientComponent} from '../buttonajoutpatient/buttonajoutpatient.component'
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-modalajoutpatient2',
  templateUrl: './modalajoutpatient2.component.html',
  styleUrls: ['./modalajoutpatient2.component.css']
})
export class Modalajoutpatient2Component implements OnInit {

  patient: any;
  onChange(_$event: any){}
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.patient=data

  }
  ngOnInit(): void {
  }
  selected = 'option';

}
