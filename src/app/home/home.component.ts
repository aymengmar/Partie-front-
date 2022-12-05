import { Component, OnInit } from '@angular/core';
import { Restaurants } from 'src/model/Restaurants';
import { RestaurantService } from '../service/restaurant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  resto:Restaurants[]=[]
  recherche: string='';

  constructor(private restoService:RestaurantService) { }

  ngOnInit(): void {
    this.restoService.getAll().subscribe(
      
      (data)=>this.resto = data,
      (error)=>console.log(error)
    );

  }

  findCar(){
    
    
    this.restoService.getbyNom(this.recherche).subscribe(
        
      (data)=>this.resto = data,
      (error)=>console.log(error)
    );
  
  }

}
