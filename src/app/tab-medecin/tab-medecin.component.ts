import { Component, OnInit , ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
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

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','Edit' ,'Delete'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  desserts: any;
  sortedData: any;

}
