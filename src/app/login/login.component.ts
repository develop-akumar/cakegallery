import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient, private route:Router) { }

  ngOnInit(): void {
  }
  login_details:any = {email :"vkrajput1258@gmail.com", password : "test" };
  
  message:any

  login(){
    console.clear()
    var url = "https://apifromashu.herokuapp.com/api/login"
    this.http.post(url, this.login_details).subscribe({next:(response:any)=>{console.log("response = ",response );
    
      this.message = response.message
      console.log("response.name = ", response.name);

      if (response.name===undefined) {
        var x=7
        console.log("undefined");
        console.log(!Number.isNaN(x));
        console.log(typeof x === 'number');

         Array.isArray(x)
        
        
      }
      

    if(response.token){
      console.log("got after successful login ");
      localStorage.setItem("username", response.name)
      localStorage.setItem("token", response.token)
      console.log("login func sets LStorage username to vikrant");
      console.log("token", response.token);
      
      this.message = "login successful";

      setTimeout(() => {this.route.navigate(["/"])
        
      }, 5000);
      
      
      
    }
    }})
  }
  
}
