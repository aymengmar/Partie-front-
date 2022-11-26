import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reclamations } from 'src/model/reclamations';
import { Observable } from 'rxjs';
import { Restaurants } from 'src/model/Restaurants';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

    Url:string="http://localhost:3000/Restaurant"
    constructor(private http:HttpClient) {  }
  count:number=0
    getAll():Observable<Restaurants[]>{
      return this.http.get<Restaurants[]>(this.Url +"/")
    }
    getbyNom(nom:string):Observable<Restaurants[]>{
      console.log("nadaaaa nada    aymeen",nom);
      
      return this.http.get<Restaurants[]>(this.Url +"/fetchBynom/"+nom)
    }
    getByid(id: number): Observable<Restaurants> {
      return this.http.get<Restaurants>(this.Url+"/detail/"+id);
  
    }
  
    getCount(): Observable<''> {
      return this.http.get<''>(this.Url+"/count");
  
    }
    remove(id:number){
      return this.http.delete(this.Url+"/remove/"+id)  
    }
    add(data:Restaurants):Observable<Restaurants>{
      return this.http.post<Restaurants>(this.Url+"/add",data);
    }
    edit(Id: number, data:Restaurants):Observable<Restaurants>{
      return this.http.put<Restaurants>(this.Url+"/update/"+Id, data);
    }
}
