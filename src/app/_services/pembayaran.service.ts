import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PembayaranService {

  constructor(private http:HttpClient) { }

  getAllPembayaran(){
    console.log("i am server")
    return this.http.get<any>(`${ baseUrl }payment`);
  }

  getPembayaranById(id: string):Observable<any>{
    return this.http.get(`${ baseUrl }payment/transaksiId?id=${id}`)
  }

  addNewPembayaran(data,id: string):Observable<any>{
    console.log("i am server")
    return this.http.post(`${ baseUrl }payment?id=${id}`,data);
  }

  deletePembayaran(id:string):Observable<any>{
    console.log("ini delete")
    return this.http.delete(`${ baseUrl }payment?id=${id}`)
  }

  editPembayaran(data,id:string):Observable<any>{
    console.log("ini edit")
    return this.http.put(`${ baseUrl }payment?id=${id}`,data);
  }
}
