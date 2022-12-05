import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandeIthem } from 'src/model/commandeIthem';
import { Restaurants } from 'src/model/Restaurants';
import { CommandeIthemService } from '../service/commande-ithem.service';
import { RestaurantService } from '../service/restaurant.service';

@Component({
  selector: 'app-commande-ithem',
  templateUrl: './commande-ithem.component.html',
  styleUrls: ['./commande-ithem.component.css']
})
export class CommandeIthemComponent implements OnInit {
  commande:CommandeIthem=new CommandeIthem();
  public orders : CommandeIthem[] = [];
  public grandTotal !: number ;
  res:Restaurants=new Restaurants()
   constructor(private commaneItemService:CommandeIthemService,
    private router:Router,
    private route:ActivatedRoute,
    public restoSev :RestaurantService,
    ) { }
    id:number=0;
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    console.log("Restaur id ",this.id)
    this.restoSev.getByid(this.id).subscribe(
      
      (data)=>

        this.res=data,
      (error)=>console.log(error)
    );
    
    this.commaneItemService.getOrders()
    .subscribe(res=>{
      console.log("reee", res)
      this.orders=res ;

      this.orders.forEach(element => {
        Object.assign(element,{quantity:1,total:element.price * element.quantity});
      });
      this.grandTotal=this.getTotalPrice();
  })
  }

  incrementQuantity(index:number)
  {
    
    this.orders[index].quantity=this.orders[index].quantity + 1 ;
    this.orders[index].total = this.orders[index].price * this.orders[index].quantity;
    this.grandTotal=this.getTotalPrice();
  }

  decrementQuantity(index:number)
  {
    console.log
    if(this.orders[index].quantity >1) 
    {
      this.orders[index].quantity=this.orders[index].quantity - 1 ;
      this.orders[index].total = this.orders[index].price * this.orders[index].quantity;
      this.grandTotal=this.getTotalPrice();
    }
  
  }
  removeItem(item:any){
    this.commaneItemService.removeCartItem(item);
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.orders.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  emptycart(){
    this.commaneItemService.removeAllCart()
  }

  ajouter(){
    if (window.confirm("Do you want to pass commande ?")) {

      this.commaneItemService.add(this.commande).subscribe((data)=>console.log(data))
      this.router.navigateByUrl('/test')
      
      
    }
    
  }

  goProducts() {
    this.router.navigate(
      ['/login'],
      { queryParams: { order: 'popular'} }
    );
  }
}
