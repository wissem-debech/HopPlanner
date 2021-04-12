import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebarsecretaire',
  templateUrl: './sidebarsecretaire.component.html',
  styleUrls: ['./sidebarsecretaire.component.css']
})
export class SidebarsecretaireComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showFiller = false;
  events: string[] = [];
  opened!: boolean;

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

}
