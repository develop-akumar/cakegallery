import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CakedetailsComponent } from './cakedetails/cakedetails.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {path: "", component:HomeComponent},
  {path:"search", component : SearchComponent},
  {path:"details/:cakeid", component : CakedetailsComponent},
  {path:"login", component : LoginComponent},
  {path:"logout", component : HomeComponent},
  {path:"cart", component : CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
