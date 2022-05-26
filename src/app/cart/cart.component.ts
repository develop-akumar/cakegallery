import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private api:ApiService, private route:Router) { }

  datafetched:any 
  showtable:any = false
  message:any

  ngOnInit(): void {
    
    console.log("ngoninit starts");
    this.api.recievecart().subscribe({next:(response:any)=>{
    console.log("\n\n\nrec response = ", response);
    this.datafetched = response.data
    console.log("response.data = ",response.data);
    console.log("\nthis.datafetched = ",this.datafetched);
    
    if(response.data.length>0){
      console.log("response.data has value");
      
      this.showtable = true
    }
    }, error:(error:any)=>{}})
  }


  
  decreaseQty(cakeid1:any){

    var body:any = {cakeid:cakeid1}
    this.api.decquantity(body).subscribe({next:(response:any)=>{console.log("decrease quantity response : ", response);
    this.message = response.message
    this.ngOnInit()
    // window.location.reload()

    
    }, error:(error:any)=>{}})
    
  }

  increaseQty( name1:any, cakeid1:any, price1:any, weight1:any, image1:any){

    var body:any = {name:name1, price:price1, cakeid:cakeid1, weight:weight1, image:image1}
     this.api.cart(body).subscribe({next:(response:any)=>{console.log("response = ", response);
     this.ngOnInit()
     }, error:(error:any)=>{}})
     

  }

  removeitem(cakeid1:any){
    console.clear()
    console.log("cake id from cart page = ", cakeid1);
    var body:any = {cakeid:cakeid1}
    this.api.removeitem(body).subscribe({next:(response:any)=>{console.log("response = ", response);
    this.message = response.message
    this.ngOnInit()
    // this.datafetched.splice(this.datafetched.findIndex((a:any) => a.id === cakeid1) , 1)

    }, error:(error:any)=>{}})
    

  }
}
