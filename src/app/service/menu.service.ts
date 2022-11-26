import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menus } from 'src/model/Menus';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  Url:string="http://localhost:3000/Menu"
  constructor(private http:HttpClient) {  }
count:number=0
  getAll():Observable<Menus[]>{
    return this.http.get<Menus[]>(this.Url +"/fetch")
  }

  getByResto(id: number):Observable<Menus[]>{
    return this.http.get<Menus[]>(this.Url +"/fetchRecResto/"+id)
  }

  getByid(id: number): Observable<Menus> {
    return this.http.get<Menus>(this.Url+"/detail/"+id);

  }

  getCount(): Observable<''> {
    return this.http.get<''>(this.Url+"/count");

  }
  remove(id:number){
    return this.http.delete(this.Url+"/remove/"+id)  
  }
  add(data:Menus):Observable<Menus>{
    return this.http.post<Menus>(this.Url+"/add",data);
  }
  edit(Id: number, data:Menus):Observable<Menus>{
    return this.http.put<Menus>(this.Url+"/update/"+Id, data);
  }
  
}
