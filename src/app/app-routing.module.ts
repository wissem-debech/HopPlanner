import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonajoutmedecinComponent } from './buttonajoutmedecin/buttonajoutmedecin.component';
import { ButtonajoutpatientComponent } from './buttonajoutpatient/buttonajoutpatient.component';
import { CorpHumainComponent } from './corp-humain/corp-humain.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { Inscription2Component } from './inscription2/inscription2.component';
import { LoginComponent } from './login/login.component';
import { ModalComponent } from './modal/modal.component';
import { PatientComponent } from './patient/patient.component';
import { ProfilsecretaireComponent } from './profilsecretaire/profilsecretaire.component';
import { SidebarsecretaireComponent } from './sidebarsecretaire/sidebarsecretaire.component';
import { SymptomeTeteComponent } from './symptome-tete/symptome-tete.component';
import { TabMedecinComponent } from './tab-medecin/tab-medecin.component';

const routes: Routes = [
  {path:'login' , component:LoginComponent},
  {path:'inscription',component:InscriptionComponent},
  {path:'patient',component:PatientComponent},
  {path:'inscription2',component:Inscription2Component},
  {path :'medecin' , component:TabMedecinComponent},
  {path :'med' , component:ModalComponent},
  {path :'corp' , component:CorpHumainComponent},
  {path :'symptete' , component:SymptomeTeteComponent},
  {path :'ajoumed' , component:ButtonajoutmedecinComponent},
  {path :'sidenav' , component:SidebarsecretaireComponent},
  {path :'ajoupat' , component:ButtonajoutpatientComponent},
  {path :'profilsec' , component:ProfilsecretaireComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
