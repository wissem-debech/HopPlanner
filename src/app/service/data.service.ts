import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Medecin } from '../medecin';
import { Patient } from '../patient';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private HttpClient:HttpClient) { }
  getdata(){
    return this.HttpClient.get('http://127.0.0.1:8000/api/medecin');
  }
  insertData(data: Medecin){
    return this.HttpClient.post('http://127.0.0.1:8000/api/addmedecin', data);
  }
  getdatabyid(id:Number){
    return this.HttpClient.get('http://127.0.0.1:8000/api/medecin/'+id);

  }
  updateData(id: Number,data: Medecin){
    return this.HttpClient.put('http://127.0.0.1:8000/api/updatemedecin'+id,data);
//data patient
  }
  getdataPattient(){
    return this.HttpClient.get('http://127.0.0.1:8000/api/patient');
  }
  insertDataPatient(data:Patient){
    

    return this.HttpClient.post('http://127.0.0.1:8000/api/addpatient',data);
  }
}


