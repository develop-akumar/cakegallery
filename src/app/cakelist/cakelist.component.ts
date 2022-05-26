import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cakelist',
  templateUrl: './cakelist.component.html',
  styleUrls: ['./cakelist.component.css']
})
export class CakelistComponent implements OnInit {

  constructor() { }

  @Input() data:any =[]

  ngOnInit(): void {
  }

}
