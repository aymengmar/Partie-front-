import { Component, OnInit } from '@angular/core';
import { GestionUserService } from '../service/gestion-user.service';
import { GestionUserComponent } from '../gestion-user/gestion-user.component';
import { Utilisateurs } from 'src/model/utilisateurs';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';
@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  
id :number=0;
  constructor(private UserSERVICE:GestionUserService ,private router:Router) { }
  usertt:Utilisateurs=new Utilisateurs();
  ngOnInit(): void {

    
   
  }
  getAll(){
    this.UserSERVICE.getAll().subscribe(
      
     
      (error)=>console.log(error)
    );
   
  }
  get(){  
    /*this.id=this.route.snapshot.params['id']*/

  this.UserSERVICE.getlogin(this.usertt).subscribe(
   
    (data)=>this.router.navigate(['/gestionUser'], { queryParams: {'Login': this.usertt.Login } }),
    (error)=>console.log(error)

  );
 
 

  }

}
