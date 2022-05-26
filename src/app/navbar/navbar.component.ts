import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private api:ApiService) { }

  ngOnInit(): void {
    console.log("navbar on init loads");
    

    this.homebuttontext = "Home"
    console.log("localstorage username = ",localStorage.getItem("username") );
    

    if(typeof(localStorage.getItem("username"))==='string'){
      this.homebuttontext = localStorage.getItem("username")
      console.log("localstorage type is string, \nso homebuttontext = localstorage.get(username)");
      

    }
  }
  homebuttontext:any = "Home"
  searchtext:any 

  search_response : any = []

  search(){
    console.clear()
    localStorage.setItem("searchtext", this.searchtext)
    console.log("localstorage navbar ", localStorage.getItem("searchtext") );
    

    this.router.navigate(["/search"],{queryParams:{q:this.searchtext}})
    }

    logout(){
      console.log("logout function called");
      localStorage.removeItem("username")
      this.router.navigate(["/logout"])
      localStorage.clear()
    }


    // "https://apifromashu.herokuapp.com/api/addcaketocart"
    //  , requestobj - {name,cakeid,price,weight,image} 
    // along with the headers where header name is authtoken. 
    // Value of the token will be what they got in response when they do login api 

    show_cart_page(){

      
      this.router.navigate(["/cart"])

    }

}
