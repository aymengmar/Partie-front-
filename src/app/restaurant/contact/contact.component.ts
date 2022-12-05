import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionReclamationService } from 'src/app/service/gestion-reclamation.service';
import { Reclamations } from 'src/model/reclamations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
r:Reclamations=new Reclamations
constructor(private route:ActivatedRoute,private recServise: GestionReclamationService,private router:Router) { }


  ngOnInit(): void {
  }
  add(){
    if (window.confirm("Do you want to send ?")) {
    this.recServise.add(this.r).subscribe((data)=>console.log(data))
    this.router.navigate(
      ['/login'],
      { queryParams: { order: 'popular'} }
    );
  }
  
  }

}
