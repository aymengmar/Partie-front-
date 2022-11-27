import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/header/header.component';
import { ContactImfoComponent } from './Shared/contact-imfo/contact-imfo.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { CommendeComponent } from './restaurant/commende/commende.component';
import { HomeComponent } from './home/home.component';
import { RestaurantHeaderComponent } from './restaurant/restaurant-header/restaurant-header.component';
import { MenuComponent } from './restaurant/menu/menu.component';
import { AboutComponent } from './restaurant/about/about.component';
import { StuffComponent } from './restaurant/stuff/stuff.component';
import { GalleryComponent } from './restaurant/gallery/gallery.component';
import { ContactComponent } from './restaurant/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InscriptionComponent } from './inscription/inscription.component';
import { NavAdminComponent } from './nav-admin/nav-admin.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { GestionUserComponent } from './gestion-user/gestion-user.component';
import { DetailReclamationComponent } from './detail-reclamation/detail-reclamation.component';
import { GestionRestoComponent } from './gestion-resto/gestion-resto.component';
import { AjouterMenuComponent } from './ajouter-menu/ajouter-menu.component';
import { AjouterRestoComponent } from './ajouter-resto/ajouter-resto.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactImfoComponent,
    FooterComponent,
    RestaurantComponent,
    CommendeComponent,
    HomeComponent,
    RestaurantHeaderComponent,
    MenuComponent,
    AboutComponent,
    StuffComponent,
    GalleryComponent,
    ContactComponent,
    
    InscriptionComponent,
    NavAdminComponent,
    AdminNavComponent,
    
    EditUserComponent,
         AuthentificationComponent,
         GestionUserComponent,
         DetailReclamationComponent,
         GestionRestoComponent,
         AjouterMenuComponent,
         AjouterRestoComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
