import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { MatangModule } from "src/assets/matang.module";
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTreeModule} from '@angular/material/tree';

import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PatientComponent } from './patient/patient.component';
import { CosultationComponent } from './cosultation/cosultation.component';
import { Inscription2Component } from './inscription2/inscription2.component';
import { ModalComponent } from './modal/modal.component';
import { TabMedecinComponent } from './tab-medecin/tab-medecin.component';
import { ProfilPatientComponent } from './profil-patient/profil-patient.component';
import { CorpHumainComponent } from './corp-humain/corp-humain.component';
import { SymptomeTeteComponent } from './symptome-tete/symptome-tete.component';
import { ModalajoutpatientComponent } from './modalajoutpatient/modalajoutpatient.component';
import { ButtonajoutmedecinComponent } from './buttonajoutmedecin/buttonajoutmedecin.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InscriptionComponent,
    PatientComponent,
    CosultationComponent,
    Inscription2Component,
    ModalComponent,
    TabMedecinComponent,
    ProfilPatientComponent,
    CorpHumainComponent,
    SymptomeTeteComponent,
    ModalajoutpatientComponent,
    ButtonajoutmedecinComponent,
  ],
  exports: [ 
    ModalComponent, TabMedecinComponent,ProfilPatientComponent, SymptomeTeteComponent,ModalajoutpatientComponent,ButtonajoutmedecinComponent ],
  imports: [
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    MatangModule,
    BrowserAnimationsModule,
    MatTreeModule
  
  ],
  providers: [], 
  bootstrap: [AppComponent],
  entryComponents: [
    ModalajoutpatientComponent
  ],
})
export class AppModule { }
