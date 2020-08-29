import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KeranjangService {

  constructor(private http:HttpClient) { }

  getItemById():Observable<any>{
    return this.http.get(`${ baseUrl }item/ById?id=${localStorage.getItem('item')}`)
  }

  getAllExpedisi(){
    console.log("i am server")
    return this.http.get<any>(`${ baseUrl }layananKurir`);
  }
}
