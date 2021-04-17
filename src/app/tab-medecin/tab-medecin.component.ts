import { Component, OnInit , ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { ModalajoutpatientComponent } from '../modalajoutpatient/modalajoutpatient.component';

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen', specialite:'neurologue', symbol: 'H'},
  {id: 2, name: 'Helium', specialite:'neurologue', symbol: 'He'},
  {id: 3, name: 'Lithium', specialite:'neurologue', symbol: 'Li'},
  {id: 4, name: 'Beryllium', specialite:'neurologue', symbol: 'Be'},
  {id: 5, name: 'Boron', specialite:'neurologue', symbol: 'B'},
  {id: 6, name: 'Carbon', specialite:'neurologue', symbol: 'C'},
  {id: 7, name: 'Nitrogen',specialite:'neurologue', symbol: 'N'},
  {id: 8, name: 'Oxygen', specialite:'neurologue', symbol: 'O'},
  {id: 9, name: 'Fluorine', specialite:'neurologue', symbol: 'F'},
  {id: 10, name: 'Neon', specialite:'neurologue', symbol: 'Ne'},
];
export interface PeriodicElement {
  
  id: number;
  name: string;
  
  
  specialite: string;
  symbol: string;
  
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
    this.dialog.open(ModalajoutpatientComponent);
  }
  
  openDialogm() {
    this.dialog.open(ModalajoutpatientComponent, {
      width:'1000px',
      height:'600px',

    });
  }

openEditMedecin(element:any){
  const dialogRef = this.dialog.open(ModalComponent,{ 
    width:'600px',
    data:element
  
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}
openDeleteMedecin(element:any){
  const dialogRef = this.dialog.open(ModalComponent,{
    width:'600px',
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

  displayedColumns: string[] = ['id','name', 'specialitée', 'symbol','Edit' ,'Delete'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  desserts: any;
  sortedData: any;

}
