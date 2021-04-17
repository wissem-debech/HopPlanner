import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { EditpatientComponent } from '../editpatient/editpatient.component';
import { ModalSuppPatientComponent } from '../modal-supp-patient/modal-supp-patient.component';
import { ModalajoutpatientComponent } from '../modalajoutpatient/modalajoutpatient.component';
export interface Patient {
  id: number;

  nom: string;
  prenom: string;
  maladie: string;
}
const ELEMENT_DATA: Patient[] = [
  {id: 1, nom: 'mohamed', prenom: 'benamor',maladie: 'hépatite c'},
  {id: 2, nom: 'khalil', prenom: 'chatti',maladie: 'hérnie discal'},
  {id: 3, nom: 'laila', prenom: 'ben saad',maladie: 'insomnie'},
  {id: 4, nom: 'mouna', prenom: 'dakhlaoui',maladie: 'kyste ovarien'},
  {id: 5, nom: 'sara', prenom: 'benomur',maladie: 'parkinson'},
  {id: 6, nom: 'samar', prenom: 'benamor',maladie: 'tendinite'},
  {id: 7, nom: 'khadija', prenom: 'boujnah',maladie: 'anémie'},
  {id: 8, nom: 'mourad', prenom: 'ben chaaben',maladie: 'varicocéle'},
  {id: 9, nom: 'nour', prenom: 'ben abdallah',maladie: 'cancer'},
  {id: 10, nom: 'kais', prenom: 'sliti',maladie: 'insuffisance rénale'},
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

  displayedColumns: string[] = ['id', 'nom', 'prenom', 'maladie','Edit','delete'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 
}




function openmodalSuppPatient(element: any, any: any) {
  throw new Error('Function not implemented.');
}

