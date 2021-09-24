import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  value1:any;
  value2:string="";


  constructor(private route:Router) { }

  ngOnInit(): void {
    
    this.value1=localStorage.getItem('firstValue');
  }
  back(){
    this.route.navigateByUrl('');

  }
  next(){
    localStorage.setItem("secondValue",this.value2);
    this.route.navigateByUrl('page3');
    
  }

}
