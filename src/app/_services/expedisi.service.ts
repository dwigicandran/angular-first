import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExpedisiService {

  constructor(private http:HttpClient) { }
  getAllExpedisi(){
    console.log("i am server")
    return this.http.get<any>(`${ baseUrl }layananKurir`);
  }
}
