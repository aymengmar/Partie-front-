import { Component, OnInit } from '@angular/core';
import { GestionUserService } from '../service/gestion-user.service';
import { GestionUserComponent } from '../gestion-user/gestion-user.component';
import { Utilisateurs } from 'src/model/utilisateurs';
import { ActivatedRoute, Router } from '@angular/router';
import { Token } from '@angular/compiler';
import { HttpErrorResponse } from '@angular/common/http';
import { RestaurantService } from '../service/restaurant.service';
@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  dataReceived: any  
  messageError:any
id :number=0;
  constructor(private UserSERVICE:GestionUserService ,private router:Router ,  private route: ActivatedRoute,private restoSev :RestaurantService ) { }
  usertt:Utilisateurs=new Utilisateurs();
  
  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParam)=>{
     console.log(queryParam);
     
    });

   
  }
  getAll(){
    this.UserSERVICE.getAll().subscribe(
      
     
      (error)=>console.log(error)
    );
   
  }
  get(){  
    this.id=this.route.snapshot.params['id']
    console.log(this.id)
     this.UserSERVICE.getlogin(this.usertt).subscribe((response) => {
     this.dataReceived = response
     this.UserSERVICE.saveDataProfil(this.dataReceived.token)
     alert(this.UserSERVICE.getRole())
    //this.router.navigate(['/gestionUser'], { queryParams: {'Login': this.usertt.Login } })
    if(this.UserSERVICE.getRole()==='user')
    { var queryParams = "order=popular"

      this.router.navigate(['commande'])
      

    }

    else if(this.UserSERVICE.getRole()==='restorateur')
    {
      this.router.navigate(['gestionResto'])
    } else {
      this.router.navigate(['/gestionUser'], { queryParams: {'Login': this.usertt.Login } })

    }
  }
    ,(err:HttpErrorResponse)=>this.messageError='verify your information')

  };
 
 

  }


