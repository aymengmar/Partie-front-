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
import { InscriptionComponent } from './inscription/inscription.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { GestionUserComponent } from './gestion-user/gestion-user.component';
import { GestionRestoComponent } from './gestion-resto/gestion-resto.component';
import { AjouterMenuComponent } from './ajouter-menu/ajouter-menu.component';
import { AjouterRestoComponent } from './ajouter-resto/ajouter-resto.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'restaurant/:id',component:RestaurantComponent},
  {path:'menu',component:MenuComponent},
  {path:'about',component:AboutComponent},
  {path:'Stuff',component:StuffComponent},
  {path:'Gallery',component:GalleryComponent},
  {path:'commander',component:CommendeComponent},
  {path:'Contact',component:ContactComponent},
  {path:'inscription',component:InscriptionComponent},
  {path:'pageadmin',component:AdminNavComponent},
  {path:'editprofile',component:EditUserComponent},
  {path : 'login', component:AuthentificationComponent },
  {path:'gestionUser',component:GestionUserComponent},
  {path:'login/:login',component:GestionUserComponent},
  {path:'gestionResto',component:GestionRestoComponent},
  {path:'ajoumenu',component:AjouterMenuComponent},
  {path:'ajouresto',component:AjouterRestoComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
