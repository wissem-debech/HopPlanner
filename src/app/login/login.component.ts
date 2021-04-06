import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public form ={
  email:null,
  password:null,

};

  constructor() { };
  onsubmit(){


  };
  ngOnInit(): void {
  }
  hide = true;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ])
}
