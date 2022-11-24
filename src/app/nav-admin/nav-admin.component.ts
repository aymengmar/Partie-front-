import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reclamations } from 'src/model/reclamations';
import { Utilisateurs } from 'src/model/utilisateurs';
import { GestionReclamationService } from '../service/gestion-reclamation.service';
import { GestionUserService } from '../service/gestion-user.service';


@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.css']
})
export class NavAdminComponent implements OnInit {
  cont :string=''
  Login:string='nadacheb'
  User:Utilisateurs=new Utilisateurs();
  Rec:Reclamations=new Reclamations();
  listrec: Reclamations[] = [];

  constructor(private route:ActivatedRoute,private userService: GestionUserService,private recService: GestionReclamationService) { }

  ngOnInit() {
    console.log("bbbbbbbbbbbbbbbbbb");
    this.recService.getCount().subscribe(
      
      (data)=>this.cont=data,
      (error)=>console.log(error)
    );
    console.log(this.cont);
    this.recService.getAll().subscribe(
      
      (data)=>this.listrec=data,
      (error)=>console.log(error)
    );
    console.log(this.listrec)
    this.recService.getByid(1).subscribe(
      
      (data)=>this.Rec = data,
      (error)=>console.log(error)
    );
    console.log(this.Rec.id)
   // const filter = this.route.snapshot.queryParamMap.get('Login');
  //  this.route.queryParams.subscribe(params => {
   //   console.log( params['Login']);
  // });
   // console.log(this.route.snapshot.queryParamMap);
   // this.Login = this.route.snapshot.queryParams[this.Login];
  // console.log(this.route.snapshot.fragment);
  this.userService.getByLogin(this.Login).subscribe(
      
    (data)=>this.User=data,
    (error)=>console.log(error)
  );
  console.log("nadaaaaa");
 
  }
}


