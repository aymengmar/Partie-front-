import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandeIthem } from 'src/model/commandeIthem';
import { Menus } from 'src/model/Menus';
import { Restaurants } from 'src/model/Restaurants';
import { CommandeIthemService } from '../service/commande-ithem.service';
import { MenuService } from '../service/menu.service';
import { RestaurantService } from '../service/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  constructor(private rou:Router,
    private route:ActivatedRoute,
     public restoSev :RestaurantService,
      private menuServise: MenuService,
      private  commandeItemService:CommandeIthemService) { }
  id:number=0;
  // comm c = new comm()
  menu:Menus[]=[]
 res:Restaurants=new Restaurants()
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    console.log("Restaur id ",this.id)
    this.loadScripts()
    
    this.restoSev.getByid(this.id).subscribe(
      
      (data)=>this.res=data,
      (error)=>console.log(error)
    );

    this.menuServise.getByResto(this.id).subscribe(
      
      (data)=>this.menu=data,
      (error)=>console.log(error)
    );



  }
   
  /* comm(nomMenu:Sting,prix:int){
   // c.nomMenu=nomMenu
   //c.prixMenu=prix
   
   this.rou.navigate(['/commander'])
  } */
// Method to dynamically load JavaScript






loadScripts() {
  
  
  // This array contains all the files/CDNs
  const dynamicScripts = [
    "assets/js/jquery-3.2.1.min.js",
    "assets/js/popper.min.js",
    "assets/js/bootstrap.min.js",
    "assets/js/jquery.superslides.min.js",
    "assets/js/images-loded.min.js",
    "assets/js/isotope.min.js",
    "assets/js/baguetteBox.min.js",
    "assets/js/form-validator.min.js",
    "assets/js/contact-form-.js",
    "assets/js/custom.js"
  ];

  for (let i = 0; i < dynamicScripts.length; i++) {
  const node = document.createElement('script');
  node.src = dynamicScripts[i];
  node.type = 'text/javascript';
  node.async = false;
  document.getElementsByTagName('body')[0].appendChild(node);
}
}

addToCart(item:Menus)
{
  console.log("item" , item)
  /* item['Menu'].name = item.name
  console.log("name",item.name);
  
  item['Menu'].price = item.price
  item['Menu'].description = item.description
  item['Menu'].photo = item.photo */
  this.commandeItemService.addToCart(item);
}
}
