import { Component, OnInit } from '@angular/core';
import { Menus } from 'src/model/Menus';
import { GestionUserService } from '../service/gestion-user.service';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'app-gestion-resto',
  templateUrl: './gestion-resto.component.html',
  styleUrls: ['./gestion-resto.component.css']
})
export class GestionRestoComponent implements OnInit {
  listMenu: Menus[] = []
  constructor(private menuService:MenuService) { }

  ngOnInit(): void {
    this.menuService.getByResto(1).subscribe(
      
      (data)=>this.listMenu=data,
      (error)=>console.log(error)
    );
  }
  modifier(id:number){}
  supprimer(id:number){
    if (window.confirm("Do you want to connected ?")) {
    this.menuService.remove(id).subscribe(
      
      (data)=>console.log(data),
      (error)=>console.log(error)
    );

  }}



}
