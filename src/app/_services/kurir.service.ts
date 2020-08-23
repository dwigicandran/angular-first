import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KurirService {

  constructor(private http:HttpClient) { }
  getAllKurir(){
    console.log("i am server")
    return this.http.get<any>(`${ baseUrl }kurir`);
  }

  getkurirById(id: string):Observable<any>{
    return this.http.get(`${ baseUrl }kurir/layananid?id=${id}`)
  }

  addNewKurir(data,id: string):Observable<any>{
    console.log("i am server")
    return this.http.post(`${ baseUrl }kurir?id=${id}`,data);
  }

  deleteKurir(id:string):Observable<any>{
    console.log("ini delete")
    return this.http.delete(`${ baseUrl }kurir?id=${id}`)
  }

  editKurir(data,id:string):Observable<any>{
    console.log("ini edit")
    return this.http.put(`${ baseUrl }kurir?id=${id}`,data);
  }
}
