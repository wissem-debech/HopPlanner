import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../service/data.service';
import {Medecin} from 'src/app/medecin';
@Component({
  selector: 'app-edit-medecin',
  templateUrl: './edit-medecin.component.html',
  styleUrls: ['./edit-medecin.component.css']
})
export class EditMedecinComponent implements OnInit {
  [x: string]: any;
  
  
  Medecin : any;
  
  
  medecin=new Medecin();
  
  constructor(public  dialogRef : MatDialogRef <EditMedecinComponent>,private route:ActivatedRoute,@Inject(MAT_DIALOG_DATA) public data: any , private _snackBar: MatSnackBar,private dataService:DataService) { 
    this.Medecin=data;
    this.Medecin.id=data.id;
    this.Medecin.nom=data.nom;
    this.Medecin.email=data.email;
    this.Medecin.prenom=data.prenom;
    this.Medecin.maladie=data.specialitee;
    this.Medecin.nom=data.grade;
    
  }
  ngOnInit(): void {
  this.id = this.route.snapshot.params.id;
    this.getdata();
  }
  getdata(){
    this.dataService.getdatabyid(this.id).subscribe(res =>{
      this.data=res;
      this.medecin = this.data;
    });
  }
  
  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
     
      duration: 2000,

    });
    
    this.dialogRef.close(this.data); 
    
  }
  
}
