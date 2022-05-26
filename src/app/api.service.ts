import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  
  baseurl:any = "https://apifromashu.herokuapp.com/api"

  
   head:any = new HttpHeaders().append("authtoken", localStorage["token"])
    

  allcake(){
    var url = this.baseurl + "/allcakes"
    return this.http.get(url)
  }

  searchcakes(){
    var url = this.baseurl + "/searchcakes?q=" + localStorage.getItem("searchtext")
    console.log("searchttextlocal = ",localStorage.getItem("searchtext"));
    
    return this.http.get(url)
  }

  cart(body:any){
    var url = this.baseurl + "/addcaketocart"

    

    console.log("localstorage = ", localStorage);
    
    console.log(this.head);
    return this.http.post(url, body, {headers:this.head})
    
    
  }

  decquantity(body:any){
    var url = this.baseurl + "/removeonecakefromcart"
    return this.http.post(url, body, {headers:this.head})

  }


  recievecart(){
    var url = this.baseurl + "/cakecart"

    return this.http.post(url,{},{headers:this.head})
    
  }

  removeitem(body:any){
    
    
    var url = this.baseurl + "/removecakefromcart"
    return this.http.post(url, body, {headers: this.head})

  }


}
