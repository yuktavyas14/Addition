import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
  value1:any;
  value2:any;
  add:any;
  add1:number=0;
  add2:number=0;

  constructor(private route:Router) { }

  ngOnInit(): void {
    this.value1=localStorage.getItem ('firstValue');
    this.value2=localStorage.getItem ('secondValue');

    console.log(typeof this.value1);
    console.log(typeof this.value2);

    console.log(parseInt (this.value1))

    this.add1=parseInt(this.value1);
    this.add2=parseInt(this.value2);
    this.add=this.add1+this.add2;
    
    console.log(typeof this.add1);
    console.log(typeof this.add2)
  }

  page1(){
    this.route.navigateByUrl('');

  }

  page2(){
    this.route.navigateByUrl('page2');
    
  }
  
  back(){
    this.route.navigateByUrl('page2');

  }

}
