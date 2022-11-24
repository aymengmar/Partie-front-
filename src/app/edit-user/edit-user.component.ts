import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionUserService } from '../service/gestion-user.service';
import { Utilisateurs } from 'src/model/utilisateurs';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private route:ActivatedRoute,private userService: GestionUserService, private router:Router) { }
   id: number =0;
  Login: string="";
  user:Utilisateurs=new Utilisateurs();
  ngOnInit(): void {
    console.log(this.route.snapshot.params['Login'])
    this.Login=this.route.snapshot.params['Login']
    console.log(this.Login)

    this.userService.getByLogin(this.Login).subscribe(
      
      (data)=>this.user=data,
      (error)=>console.log(error)
    );
    
  }
  edit(){
    if (window.confirm("Do you really want to leave?")) {
      this.userService.edit(this.user.id,this.user).subscribe((data)=>console.log(data))
      this.router.navigateByUrl('/gestionUser')
    }
  }

  edit1(){

    this.userService.edit(this.user.id,this.user).subscribe((data)=>console.log(data))
    this.router.navigateByUrl('/gestionUser')
  }

}
