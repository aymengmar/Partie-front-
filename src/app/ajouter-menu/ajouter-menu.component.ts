import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menus } from 'src/model/Menus';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'app-ajouter-menu',
  templateUrl: './ajouter-menu.component.html',
  styleUrls: ['./ajouter-menu.component.css']
})
export class AjouterMenuComponent implements OnInit {
  menus:Menus=new Menus();
  constructor(private MenuService:MenuService ,private router:Router) { }

  ngOnInit(): void {
  }
  onFileChange(event: any){
    this.menus.image = event.target.files[0];
    console.log("menu phoyto", this.menus.image);
  }
  ajouter(){
    if (window.confirm("Do you want to add menu ?")) {
    console.log("after ajout", this.menus.image)
    this.menus.RestaurantId = 1
    var formData: any = new FormData();
    formData.append('image', this.menus.image);
    formData.append('name', this.menus.name);
    formData.append('description', this.menus.description);
    formData.append('RestaurantId', this.menus.RestaurantId);
    formData.append('price', this.menus.price);
    this.MenuService.add(formData).subscribe((data)=>console.log(data))
    this.router.navigateByUrl('/gestionResto')
    
  }
  
  }

}
