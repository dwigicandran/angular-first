import { baseUrl } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(data):Observable<any>{
    console.log("i am server")
    return this.http.post(`${ baseUrl }login`,data);
  }

  register(data):Observable<any>{
    console.log("i am server")
    return this.http.post(`${ baseUrl }user`,data);
  }

  loggedin(){
    return !!localStorage.getItem('token')
  }

  getToken (){
    return localStorage.getItem('token')
  }

}
