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
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
