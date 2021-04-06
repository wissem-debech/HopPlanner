import { Component, OnInit } from '@angular/core';
interface Car {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-corp-humain',
  templateUrl: './corp-humain.component.html',
  styleUrls: ['./corp-humain.component.css']
})
export class CorpHumainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cars: Car[] = [
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'saab', viewValue: 'Saab'},
    {value: 'mercedes', viewValue: 'Mercedes'}
  ];
}
