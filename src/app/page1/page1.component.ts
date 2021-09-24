import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  value:string="";

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  next(){
    localStorage.setItem("firstValue",this.value);
    this.route.navigateByUrl('page2');
    
  }

}
