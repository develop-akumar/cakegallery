import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cakedetails',
  templateUrl: './cakedetails.component.html',
  styleUrls: ['./cakedetails.component.css']
})
export class CakedetailsComponent implements OnInit {
  cakeid  : any 
  cake : any = []
  constructor(private routes:ActivatedRoute, private http:HttpClient, private api:ApiService, private route:Router) { 
    this.cakeid = this.routes.snapshot.paramMap.get("cakeid")
    console.log(this.cakeid)

    var url = "https://apifromashu.herokuapp.com/api/cake/" + this.cakeid
    
    this.http.get(url).subscribe({next:(response:any)=>{
      console.log(response)
      this.cake = response.data
      console.log(this.cake)
    }})
  }

  ngOnInit(): void {
  }

  cakecartarray:any = {
    name : "",
    cakeid:"",
    price:"",
    weight:"",
    image:"",
  }
  
  message:any

    // "https://apifromashu.herokuapp.com/api/addcaketocart"
    //  , requestobj - {name,cakeid,price,weight,image} 
    // along with the headers where header name is authtoken. 
    // Value of the token will be what they got in response when they do login api 
  

  add_to_cart(){
    console.clear()
    console.log("add to cart clicked");
    

    this.cakecartarray.name = this.cake.name
    this.cakecartarray.price = this.cake.price
    this.cakecartarray.cakeid = this.cake.cakeid
    this.cakecartarray.weight = this.cake.weight
    this.cakecartarray.image = this.cake.image

    console.log(this.cakecartarray);

    if(localStorage["token"]){
    this.api.cart(this.cakecartarray).subscribe({next:(response:any)=>{console.log("response = ", response);
    if(response.data.name){
      this.message=response.message
    }
    }, error:(error:any)=>{}})
  }
  else{
      this.route.navigate(["/login"])
    }
        
  }

}
