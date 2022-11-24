import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateurs } from 'src/model/utilisateurs';
import { GestionUserService } from '../service/gestion-user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  user:Utilisateurs=new Utilisateurs();
  constructor(private userService: GestionUserService ,private router:Router) { }

  ngOnInit(): void {

  }
 
Inscrip(){
  if (window.confirm("Do you want to connected ?")) {
  this.userService.addinscri(this.user).subscribe((data)=>console.log(data))
  this.router.navigateByUrl('/login')
}
}



}

