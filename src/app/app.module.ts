import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CakeComponent } from './cake/cake.component';
import { CakedetailsComponent } from './cakedetails/cakedetails.component';
import { CakelistComponent } from './cakelist/cakelist.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MycompComponent } from './mycomp/mycomp.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    CakeComponent,
    CakedetailsComponent,
    CakelistComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    SearchComponent,
    HomeComponent,
    CarouselComponent,
    MycompComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MycompComponent]
})
export class AppModule { }
