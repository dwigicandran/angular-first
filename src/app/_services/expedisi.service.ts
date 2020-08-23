import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpedisiService {

  constructor(private http:HttpClient) { }
  getAllExpedisi(){
    console.log("i am server")
    return this.http.get<any>(`${ baseUrl }layananKurir`);
  }
  addNewExpedisi(data):Observable<any>{
    console.log("i am server")
    return this.http.post(`${ baseUrl }layananKurir`,data);
  }

  deleteExpedisi(id:string):Observable<any>{
    console.log("ini delete")
    return this.http.delete(`${ baseUrl }layananKurir?id=${id}`)
  }
  editExpedisi(data):Observable<any>{
    console.log("ini edit")
    return this.http.put(`${ baseUrl }layananKurir`,data);
  }
  getExpedisiById(id: string):Observable<any>{
    return this.http.get(`${ baseUrl }layananKurir/ById?id=${id}`)
  }
}
