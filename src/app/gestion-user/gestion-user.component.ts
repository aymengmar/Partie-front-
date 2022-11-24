import { Component, OnInit } from '@angular/core';
import { Utilisateurs } from 'src/model/utilisateurs';
import { GestionUserService } from '../service/gestion-user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Reclamations } from 'src/model/reclamations';
import { GestionReclamationService } from '../service/gestion-reclamation.service';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';



@Component({
  selector: 'app-gestion-user',
  templateUrl: './gestion-user.component.html',
  styleUrls: ['./gestion-user.component.css']
})

 
export class GestionUserComponent implements OnInit {
  inactif: string ='inactif';
  actif: string ='actif';
  recherche: string='';
  id: number=0;
  user:Utilisateurs=new Utilisateurs();
  rec:Reclamations=new Reclamations();
  public static userDetail:Utilisateurs=new Utilisateurs();
  listUsers: Utilisateurs[] = []
  listRec: Reclamations[] = []
 
  constructor(private route:ActivatedRoute,private userService: GestionUserService ,private recServise: GestionReclamationService,private router:Router) { }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(

      (p)=>{console.log(p)}
    )
   // console.log(this.route.snapshot.queryParamMap);
    this.userService.getAll().subscribe(
      
      (data)=>this.listUsers = data,
      (error)=>console.log(error)
    );
    
    this.userService.getByLogin('nadacheb').subscribe(
      
      (data)=>console.log(data),
      (error)=>console.log(error)
    );
    this.recServise.getAll().subscribe(
      (data)=>this.listRec = data,
      (error)=>console.log(error)
    );
    console.log(this.listRec)
    }
  

  ajout(){
    this.userService.add(this.user).subscribe(
      
      (data)=>console.log(data),
      (error)=>console.log(error)
    );
  }

  
  desactiver(id:number){
    console.log("nadaaaaaaabbbbcccc")
    console.log(id)
    console.log(this.inactif)
    this.userService.etat(id,this.inactif).subscribe(response => {
      console.log(response);
  })}
 
 
 
 
 
  activer(){
    this.user.etat='actif'
    console.log(this.user.id)
    this.userService.etat(this.user.id,this.actif).subscribe((data)=>console.log(data))
  
  }
  findCar(){
  this.userService.getByCaracter(this.recherche).subscribe(
      
    (data)=>this.listUsers = data,
    (error)=>console.log(error)
  );

}
edit(id: number){
  this.userService.getByid(id).subscribe(
    
    (data)=>GestionUserComponent.userDetail=data,
  
    (error)=>console.log(error)
  );

  this.router.navigateByUrl('/login');
}
  


}
