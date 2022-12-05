import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommandeIthemService } from 'src/app/service/commande-ithem.service';
import { Restaurants } from 'src/model/Restaurants';

@Component({
  selector: 'app-restaurant-header',
  templateUrl: './restaurant-header.component.html',
  styleUrls: ['./restaurant-header.component.css']
})
export class RestaurantHeaderComponent implements OnInit {
  nbrOrder:number=0;
  constructor(private commandeIthemService:CommandeIthemService,
    private route:ActivatedRoute) { }
  id:number=0;
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.commandeIthemService.getOrders()
    .subscribe(res=>{
      this.nbrOrder = res.length;
    })
  }

}
