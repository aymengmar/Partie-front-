import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reclamations } from 'src/model/reclamations';
import { GestionReclamationService } from '../service/gestion-reclamation.service';

@Component({
  selector: 'app-detail-reclamation',
  templateUrl: './detail-reclamation.component.html',
  styleUrls: ['./detail-reclamation.component.css']
})
export class DetailReclamationComponent implements OnInit {

  constructor(private route:ActivatedRoute,private recServise: GestionReclamationService,private router:Router) { }
  id: number =0;
  rec:Reclamations=new Reclamations();
  ngOnInit(): void {
    this.route.queryParams.subscribe(

      (p)=>{console.log(p)}
    )
  
    this.id=this.route.snapshot.params['id']
    console.log(this.id)
    this.recServise.getByid(this.id).subscribe(
      
      (data)=>this.rec=data,
      (error)=>console.log(error)
    );
  }
  update(){
    if (window.confirm("Do you really want to leave?")) {
    this.recServise.remove(this.id).subscribe(
   
      (data)=>console.log(data),
      (error)=>console.log(error)
  
    );
    this.router.navigateByUrl('/gestionUser')
  }}
  

}
