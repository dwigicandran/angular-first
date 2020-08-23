import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransaksiService {

  constructor(private http:HttpClient) { }
  getAllTransaksi(){
    console.log("i am server")
    return this.http.get<any>(`${ baseUrl }transaksi`);
  }
  addNewTransaksi(data):Observable<any>{
    console.log("i am server")
    return this.http.post(`${ baseUrl }transaksi`,data);
  }

  deleteTransaksi(id:string):Observable<any>{
    console.log("ini delete")
    return this.http.delete(`${ baseUrl }transaksi?id=${id}`)
  }
  editTransaksi(data):Observable<any>{
    console.log("ini edit")
    return this.http.put(`${ baseUrl }transaksi`,data);
  }
  getTransaksiById(id: string):Observable<any>{
    return this.http.get(`${ baseUrl }transaksi/ById?id=${id}`)
  }
}
