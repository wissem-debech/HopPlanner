import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { Inscription2Component } from './inscription2/inscription2.component';
import { LoginComponent } from './login/login.component';
import { PatientComponent } from './patient/patient.component';
import { TabMedecinComponent } from './tab-medecin/tab-medecin.component';
import { ModalComponent } from './modal/modal.component';
import { ProfilPatientComponent } from './profil-patient/profil-patient.component';

const routes: Routes = [
  {path:'login' , component:LoginComponent},
  {path:'inscription',component:InscriptionComponent},
  {path:'patient',component:PatientComponent},
  {path:'inscription2',component:Inscription2Component},
  {path :'medecin' , component:TabMedecinComponent},
  {path :'med' , component:ModalComponent},
  {path :'profil-patient' , component:ProfilPatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
