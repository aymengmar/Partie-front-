import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menus } from 'src/model/Menus';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'app-modifier-menu',
  templateUrl: './modifier-menu.component.html',
  styleUrls: ['./modifier-menu.component.css']
})
export class ModifierMenuComponent implements OnInit {
menu : Menus = new Menus()
  constructor(private route:ActivatedRoute,private menuSer:MenuService) { }
  id: number =0;
 
  ngOnInit(): void {
    this.id=this.route.snapshot.params['Login']
    
    this.menuSer.getByid(this.id).subscribe(
      
      (data)=>this.menu=data,
      (error)=>console.log(error)
    );
  }

}
