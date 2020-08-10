import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  

  constructor(private http:HttpClient) { }

  getAllItems(){
    console.log("i am server")
    return this.http.get<any>(`${ baseUrl }item`);
  }

  addNewItem(data):Observable<any>{
    console.log("i am server")
    return this.http.post(`${ baseUrl }item`,data);
  }

  getItemById(id: string): Observable<any>{
    return this.http.get(`${ baseUrl }item/ById?id=${id}`)
  }
}
