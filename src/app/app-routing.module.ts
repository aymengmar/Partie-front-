import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommendeComponent } from './restaurant/commende/commende.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './restaurant/about/about.component';
import { ContactComponent } from './restaurant/contact/contact.component';
import { GalleryComponent } from './restaurant/gallery/gallery.component';
import { MenuComponent } from './restaurant/menu/menu.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { StuffComponent } from './restaurant/stuff/stuff.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'restaurant',component:RestaurantComponent},
  {path:'menu',component:MenuComponent},
  {path:'about',component:AboutComponent},
  {path:'Stuff',component:StuffComponent},
  {path:'Gallery',component:GalleryComponent},
  {path:'commander',component:CommendeComponent},
  {path:'Contact',component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
