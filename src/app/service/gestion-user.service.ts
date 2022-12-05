import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utilisateurs } from 'src/model/utilisateurs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionUserService {
  ProfilAdmin={
    role:''
  }
  helper = new JwtHelperService()
  userUrl:string="http://localhost:3000/tastaUser"
  usrr : Utilisateurs=new Utilisateurs;
  
  constructor(private http:HttpClient ) { }
  getAll():Observable<Utilisateurs[]>{
    return this.http.get<Utilisateurs[]>(this.userUrl +"/fetch")
  }
  
  add(data:Utilisateurs):Observable<Utilisateurs>{
    return this.http.post<Utilisateurs>(this.userUrl+"/add",data);
  }
  edit(Id: number, data:Utilisateurs):Observable<Utilisateurs>{
    return this.http.put<Utilisateurs>(this.userUrl+"/update/"+Id, data);
  }

  etat(Id: number, etat: string):Observable<Utilisateurs>{
    console.log(etat)
    
    return this.http.put<Utilisateurs>(this.userUrl+"/updateEtat/"+Id, {
      bady:{
      etat: this.etat
      }}
      )
      ;
 
  }
  //recherche de menu 
  getByCaracter(car: string): Observable<Utilisateurs[]> {
    return this.http.get<Utilisateurs[]>(this.userUrl+"/fetchByCart/"+car);

  }
  getByid(id: number): Observable<Utilisateurs> {
    return this.http.get<Utilisateurs>(this.userUrl+"/detail/"+id);

  }

  
  getByLogin(Login: string): Observable<Utilisateurs> {
    return this.http.get<Utilisateurs>(this.userUrl+"/fetchByLogin/"+Login);

  }
  //////////////
  getlogin(data:Utilisateurs): Observable<Utilisateurs> {
    return this.http.post<Utilisateurs>(this.userUrl+"/login",data);

  }

  saveDataProfil(token: string ) {
    localStorage.setItem('access-token', token)
  
  }
//decodeToken "role"
  getRole(){
    let token:  any = localStorage.getItem('access-token')
    let decodeToken = this.helper.decodeToken(token)
    return decodeToken.role
  }

  LoggedIn() {
    let token: any = localStorage.getItem('access-token')
    if (!token){
      return false
    }
     if (this.helper.isTokenExpired(token)) {
      return false
     }
    return true
  }

  Admin() {
    let token: any = localStorage.getItem('access-token')

    let decodeToken = this.helper.decodeToken(token)

  if (decodeToken.role !=='admin') {
   return    false
    }

    if (this.helper.isTokenExpired(token)) {
     return false
    }
    return  true
  }

  

  addinscri(data:Utilisateurs):Observable<Utilisateurs>{
    return this.http.post<Utilisateurs>(this.userUrl+"/register",data);
  }

}
