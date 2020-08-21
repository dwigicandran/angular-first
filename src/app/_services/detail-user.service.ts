import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { baseUrl } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailUserService {

  constructor(private http:HttpClient, private authService: AuthService) { }

  getAllDetailUsers(){
    console.log("i am server")
    return this.http.get<any>(`${ baseUrl }detailUser`);
  }
  
  getDetailByUserId():Observable<any>{
    return this.http.get(`${ baseUrl }detailUser/userid?id=${this.authService.getIdUser()}`)
  }

  getDetailById(id: string):Observable<any>{
    return this.http.get(`${ baseUrl }detailUser/userid?id=${id}`)
  }

  addNewDetail(data,id: string):Observable<any>{
    console.log("i am server")
    return this.http.post(`${ baseUrl }detailUser?id=${id}`,data);
  }

  deleteDetail(id:string):Observable<any>{
    console.log("ini delete")
    return this.http.delete(`${ baseUrl }detailUser?id=${id}`)
  }

  editDetail(data,id:string):Observable<any>{
    console.log("ini edit")
    return this.http.put(`${ baseUrl }detailUser?id=${id}`,data);
  }
  
}
