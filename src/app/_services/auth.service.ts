import { Router } from '@angular/router';
import { baseUrl } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private router:Router) { }

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

  logout(){
    localStorage.removeItem('token')
    this.router.navigate([''])
  }

  getToken (){
    return localStorage.getItem('token')
  }

  getIdUser (){
    return localStorage.getItem('id')
  }

}
