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
import { CorpHumainComponent } from './corp-humain/corp-humain.component';
import { SymptomeTeteComponent } from './symptome-tete/symptome-tete.component';
import { ModalajoutpatientComponent } from './modalajoutpatient/modalajoutpatient.component';
import { SidebarsecretaireComponent } from './sidebarsecretaire/sidebarsecretaire.component';
import { ButtonajoutpatientComponent } from './buttonajoutpatient/buttonajoutpatient.component';
import { Modalajoutpatient2Component } from './modalajoutpatient2/modalajoutpatient2.component';
import { ProfilsecretaireComponent } from './profilsecretaire/profilsecretaire.component';
import { CardsecretaireComponent } from './cardsecretaire/cardsecretaire.component';
import { SympthomeventreComponent } from './sympthomeventre/sympthomeventre.component';
import { ModalSuppPatientComponent } from './modal-supp-patient/modal-supp-patient.component';
import { AjoutmedComponent } from './ajoutmed/ajoutmed.component';
import { DeleteMedecinComponent } from './delete-medecin/delete-medecin.component';
import { EditMedecinComponent } from './edit-medecin/edit-medecin.component';
import { EditpatientComponent } from './editpatient/editpatient.component';
import { ProfilPatientComponent} from './profil-patient/profil-patient.component';
import {HttpClientModule} from '@angular/common/http';



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
    CorpHumainComponent,
    SymptomeTeteComponent,
    ModalajoutpatientComponent,
    SidebarsecretaireComponent,
    ButtonajoutpatientComponent,
    Modalajoutpatient2Component,
    ProfilsecretaireComponent,
    CardsecretaireComponent,
    SympthomeventreComponent,
    ModalSuppPatientComponent,
    AjoutmedComponent,
    DeleteMedecinComponent,
    EditMedecinComponent,
    EditpatientComponent,
    ProfilPatientComponent,
    EditMedecinComponent
  ],
  exports: [ 
    ModalComponent, ProfilPatientComponent, TabMedecinComponent, SymptomeTeteComponent,ModalajoutpatientComponent,SidebarsecretaireComponent],
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
    MatTreeModule,
    HttpClientModule
  
  ],
  providers: [], 
  bootstrap: [AppComponent],
  entryComponents: [
    ModalajoutpatientComponent,
    Modalajoutpatient2Component
  ],
})
export class AppModule { }
