import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api:ApiService) { 
    
  }

  

  

  
  

  ngOnInit(): void {
    
    console.log("entered ngoninit home");
    
    this.api.allcake().subscribe({next:(response:any)=>{console.log(response);
      this.allcakes = response.data
      console.log("this.allcakes = ", this.allcakes);
      
    }, error:(error:any)=>{}})


  }

  allcakes:any = []

}
