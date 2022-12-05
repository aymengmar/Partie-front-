import { Component, OnInit } from '@angular/core';
import { CommandeIthemService } from 'src/app/service/commande-ithem.service';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  id:number=0;
  public productList : any;
  constructor(private api :MenuService, private commService:CommandeIthemService) { }

  ngOnInit(): void {
    this.api.getByid(this.id).subscribe(res=>{
      this.productList =res;
      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
    })

  }

}
