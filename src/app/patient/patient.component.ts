import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { EditpatientComponent } from '../editpatient/editpatient.component';
import { ModalSuppPatientComponent } from '../modal-supp-patient/modal-supp-patient.component';
import { ModalajoutpatientComponent } from '../modalajoutpatient/modalajoutpatient.component';
export interface PeriodicElement {
  position: number;

  name: string;
  weight: string;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'mohamed', weight: 'benamor', symbol: 'hépatite c'},
  {position: 2, name: 'khalil', weight: 'chatti', symbol: 'hérnie discal'},
  {position: 3, name: 'laila', weight: 'ben saad', symbol: 'insomnie'},
  {position: 4, name: 'mouna', weight: 'dakhlaoui', symbol: 'kyste ovarien'},
  {position: 5, name: 'sara', weight: 'benameur', symbol: 'parkinson'},
  {position: 6, name: 'samar', weight: 'benamor', symbol: 'tendinite'},
  {position: 7, name: 'khadija', weight: 'boujnah', symbol: 'anémie'},
  {position: 8, name: 'mourad', weight: 'ben chaaben', symbol: 'varicocéle'},
  {position: 9, name: 'nour', weight: 'ben abdallah', symbol: 'cancer'},
  {position: 10, name: 'kais', weight: 'sliti', symbol: 'insuffisance rénale'},
];

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  openDialog() {
    this.dialog.open(ModalajoutpatientComponent);
  }
openeditpatient(element : any){
  this.dialog.open(EditpatientComponent , {
    data : element
  })
 
}
openmodalSuppPatient(element : any){
  this.dialog.open(ModalSuppPatientComponent , {
    data : element})
}
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','Edit','delete'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 
}




function openmodalSuppPatient(element: any, any: any) {
  throw new Error('Function not implemented.');
}

