import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabMedecinComponent } from '../tab-medecin/tab-medecin.component';

@NgModule({
    declarations: [TabMedecinComponent],
    imports: [ CommonModule ],
    exports: [TabMedecinComponent],
    providers: [], 
})
export class ProfilPatientModule {} 
