import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reclamations } from 'src/model/reclamations';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionReclamationService {
  reclmUrl:string="http://localhost:3000/tastaReclm"
  constructor(private http:HttpClient) {  }
count:number=0
  getAll():Observable<Reclamations[]>{
    return this.http.get<Reclamations[]>(this.reclmUrl +"/fetch")
  }

  getByid(id: number): Observable<Reclamations> {
    return this.http.get<Reclamations>(this.reclmUrl+"/fetchRecby/"+id);

  }

  getCount(): Observable<''> {
    return this.http.get<''>(this.reclmUrl+"/count");

  }
  remove(id:number){
    return this.http.delete(this.reclmUrl+"/remove/"+id)  
  }

  add(data:Reclamations):Observable<Reclamations>{
    return this.http.post<Reclamations>(this.reclmUrl+"/add",data);
  }

}