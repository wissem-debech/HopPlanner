import { Component, OnInit , ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { AjoutmedComponent } from '../ajoutmed/ajoutmed.component';
import {DeleteMedecinComponent} from '../delete-medecin/delete-medecin.component';
import {EditMedecinComponent } from '../edit-medecin/edit-medecin.component';

const ELEMENT_DATA: medecin[] = [
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
  
  
  specialite: string;
  grade: string;
  
}
@Component({
  selector: 'app-tab-medecin',
  templateUrl: './tab-medecin.component.html',
  styleUrls: ['./tab-medecin.component.css']
})
export class TabMedecinComponent implements OnInit {
  ngOnInit(){
  }
  constructor(public dialog: MatDialog) { }
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
  const dialogRef = this.dialog.open(EditMedecinComponent,{ 
  
    data:element
  
  });

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

  displayedColumns: string[] = ['id','name', 'specialitée', 'grade','Edit' ,'Delete'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  desserts: any;
  sortedData: any;

}
