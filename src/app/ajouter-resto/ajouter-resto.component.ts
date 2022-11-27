import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurants } from 'src/model/Restaurants';
import { RestaurantService } from '../service/restaurant.service';

@Component({
  selector: 'app-ajouter-resto',
  templateUrl: './ajouter-resto.component.html',
  styleUrls: ['./ajouter-resto.component.css']
})
export class AjouterRestoComponent implements OnInit {
  resto:Restaurants=new Restaurants();
  constructor(private restoService:RestaurantService ,private router:Router) { }

  ngOnInit(): void {
  }
  ajouter(){
    if (window.confirm("Do you want to add resto ?")) {

    this.restoService.add(this.resto).subscribe((data)=>console.log(data))
    this.router.navigateByUrl('/gestionResto')
    
  }
  
  }

}
