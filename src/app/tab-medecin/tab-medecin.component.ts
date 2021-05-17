import { Component, OnInit , ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { AjoutmedComponent } from '../ajoutmed/ajoutmed.component';
import {DeleteMedecinComponent} from '../delete-medecin/delete-medecin.component';
import {EditMedecinComponent } from '../edit-medecin/edit-medecin.component';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../service/data.service';
import {Medecin} from 'src/app/medecin'

/*const ELEMENT_DATA: medecin[] = [
  {id: 1, name: 'hanen', specialite:'cardiologue', grade: 'H'},
  {id: 2, name: 'donia', specialite:'neurologue', grade: 'He'},
  {id: 3, name: 'boutheina', specialite:'dermatologue', grade: 'Li'},
  {id: 4, name: 'mourad', specialite:'geriatre', grade: 'Be'},
  {id: 5, name: 'samir', specialite:'psychiare', grade: 'B'},
  {id: 6, name: 'mounir', specialite:'nephrologue', grade: 'C'},
  {id: 7, name: 'nader',specialite:'odontologue', grade: 'N'},
  {id: 8, name: 'khaled', specialite:'pédiatre', grade: 'O'},
  {id: 9, name: 'raed', specialite:'pneumologue', grade: 'F'},
  {id: 10, name: 'sirine', specialite:'urologue', grade: 'Ne'},
];
export interface medecin {
  
  id: number;
  name: string;
  
  
  specialitee: string;
  grade: string;
  
}*/
@Component({
  selector: 'app-tab-medecin',
  templateUrl: './tab-medecin.component.html',
  styleUrls: ['./tab-medecin.component.css']
})
export class TabMedecinComponent implements OnInit {
  id:any;
  medecin: any;
  ngOnInit(){
    this.getDataMedecin();
  }
  constructor(public dialog: MatDialog,private route:ActivatedRoute,private dataService:DataService) { }
  getDataMedecin(){
    this.dataService.getdata().subscribe(res =>{
      this.dataSource.data = res as Medecin[];
    });

  }
  openDialog() {
    this.dialog.open(AjoutmedComponent);
  }
  
  openDialogm() {
    this.dialog.open(AjoutmedComponent, {
      width:'1000px',
      height:'600px',

    });
  }

openEditMedecin(element:any){
  //this.router.navigate(['/', 'edit{{element.id}}']);
  const dialogRef = this.dialog.open(EditMedecinComponent,{ 
  
    data:element
  
  }
  
  
  );

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}
openDeleteMedecin(element:any){
  const dialogRef = this.dialog.open(DeleteMedecinComponent,{
    data:element,
    
  }
  );
  

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}
applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  @ViewChild(MatSort)
  sort!: MatSort;
  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  ELEMENT_DATA!: Medecin[];
  displayedColumns: string[] = ['id','nom', 'prenom','email', 'specialitee', 'grade','Edit' ,'Delete'];
  dataSource = new MatTableDataSource<Medecin>(this.ELEMENT_DATA);
  desserts: any;
  sortedData: any;

}
