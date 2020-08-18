import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private authService: AuthService) { }
  getAllUsers(){
    console.log("i am server")
    return this.http.get<any>(`${ baseUrl }user`);
  }

  addNewUser(data):Observable<any>{
    console.log("i am server")
    return this.http.post(`${ baseUrl }user`,data);
  }

  getDashboardById(id: string):Observable<any>{
    return this.http.get(`${ baseUrl }user/ById?id=${this.authService.getIdUser()}`)
  }
  deleteUser(id:string):Observable<any>{
    console.log("ini delete")
    return this.http.delete(`${ baseUrl }user?id=${id}`)
  }
  editUser(data):Observable<any>{
    console.log("ini edit")
    return this.http.put(`${ baseUrl }user`,data);
  }
  getUserById(id: string):Observable<any>{
    return this.http.get(`${ baseUrl }user/ById?id=${id}`)
  }
}
