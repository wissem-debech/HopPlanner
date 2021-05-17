import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../service/data.service';
import { Patient } from '../patient';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
  [x: string]: any;

  files:any;
  Patient=new Patient();
  patient: any;
  myGroup!: FormGroup;
  private _formBuilder: any;
  
  createForm(){
    this.myGroup = this.formBuilder.group({
      photo: [null,Validators.required],
      id: [null,Validators.required],
     nom: [null,Validators.required],
      prenom: [null,Validators.required],
      sexe: [null,Validators.required],
      maladie: [null,Validators.required],
      email: [null,Validators.required],

    });
  }
  get forms(){
return this.myGroup.controls
  }
  onChange(_$event:any){
   this.files= _$event.target.files[0];
   console.log(this.files);
   
  
  }

 
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dataService:DataService,private domSanitizer: DomSanitizer, private formBuilder:FormBuilder) {
    this.patient=data;
    


  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit(): void {
this.createForm();
  }
  selected = 'option';
  insertdataPatient(){
    const formData = new FormData();
    formData.append("photo", this.files, this.files.name);
    formData.append("nom", this.files, this.files.name);
    formData.append("prenom", this.files, this.files.name);
    formData.append("email", this.files, this.files.name);
    formData.append("sexe", this.files, this.files.name);
    formData.append("maladie", this.files, this.files.name);


    this.dataService.insertDataPatient(this.Patient).subscribe(res => {
      this.data = res;
      this.formData = res;

  });

}}
