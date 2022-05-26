import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';






@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  response_array:any 

  constructor(private activatedRoute:ActivatedRoute, private api:ApiService, private http:HttpClient) { 
    this.activatedRoute.queryParams.subscribe((query:any)=>{
      
      console.log("query = ", query.q);

      console.log( localStorage["searchtext"] );
      

      if(query.q){
        console.log("query has some value = ", query.q);
        localStorage.setItem("searchtext",query.q)
        var url  = "https://apifromashu.herokuapp.com/api/searchcakes?q="+query.q
        
      }
      else
      {console.log("query me kuch nahi hai");
      
      console.log("query  = ", query.q);
      var url  = "https://apifromashu.herokuapp.com/api/searchcakes?q="+ localStorage["searchtext"]
      

      }
          

    
      this.http.get(url).subscribe({next:(response:any)=>{

        console.log(response)

        this.response_array = response.data

        console.log(this.response_array)

      }

    ,error:(error)=>{

      console.log(error)

    }})
    
    })
      
      
  }

  ngOnInit(): void {
  }

  
  cakeid:any 
  url:any




}
